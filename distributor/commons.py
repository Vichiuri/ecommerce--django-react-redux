"""
Contains commonly used methods through out the system
"""
import base64
import logging
import random
import string
import traceback
from datetime import datetime
from io import BytesIO

import dateutil
from cryptography.fernet import Fernet
from django.core.mail import EmailMessage
from django.http import HttpResponse, FileResponse
from django.template.loader import get_template, render_to_string
from django.utils.crypto import get_random_string
from djmoney.money import Money
from weasyprint import HTML, CSS
from xhtml2pdf import pisa

from distributor.models import MUnit, DistEmailSettings, Product, SalesMan, DistRegion, Retailer, PriceLevel, \
    PriceOffer, PCategory, Distributor, DistributorOptions, PriceList, RetailerProfile
from netbot_biz import settings


def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)

    result = BytesIO()

    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    print("Hello world Preparing to print out a pdf")
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


def send_dist_email(distributor, template_name,
                    to_emails,  # Emails To send to
                    subject="",  # Email Subject
                    context_dict={},  # Template Context
                    ):
    """
    send distributor email to retailers and salesmen
    """
    try:
        if not distributor.dist_email_settings:
            return False
        em_settings = distributor.dist_email_settings
        msg_html = render_to_string(template_name, context_dict)
        msg = EmailMessage(subject=subject, body=msg_html,
                           from_email=em_settings.email_user, to=to_emails,
                           connection=em_settings.connection)
        msg.content_subtype = 'html'
        msg.send(fail_silently=False)

        return True
    except Exception as e:
        print("\n\nAn Error Occurred", str(e), "\n\n")
        return False


def generate_distributor_code(prefix):
    chars = string.ascii_uppercase + string.digits
    code = ''.join(random.choice(chars) for _ in range(7))
    company_code = f'{prefix}-{code}'
    return company_code

def random_password():
    """
    Generates a random one time password for distributors
    """
    lettersCaps = string.ascii_uppercase
    lettersLow = string.ascii_lowercase
    numbers_ = string.digits
    result_str = ''.join(random.choice(lettersCaps) for i in range(5))
    result_str = result_str + \
        str((''.join(random.choice(lettersLow) for i in range(15))))
    result_str = result_str + \
        str((''.join(random.choice(numbers_) for i in range(9))))
    # result_str = result_str + str(''.join(random.choice(prints) for i in range(10)))

    final_pass = ''.join(random.choice(result_str) for i in range(8))
    return final_pass


def send_html_email(to_list, subject, template_name, context, sender=settings.DEFAULT_FROM_EMAIL):
    """

    """
    try:
        msg_html = render_to_string(template_name, context)
        msg = EmailMessage(subject=subject, body=msg_html,
                           from_email=sender, bcc=to_list)
        msg.content_subtype = "html"  # Main content is now text/html
        msg.send()
        return True
    except Exception as e:
        return False


def calculateSubscription(distributor):
    """ 
    * Calculate time difference for subscriptions 
    """
    subscription = distributor.subscription
    period_length = subscription.period_length
    period_time = subscription.period_time
    start_date = distributor.current_subscription_date

    if period_time == "month":
        a_month = dateutil.relativedelta.relativedelta(months=period_length)
        a_day = dateutil.relativedelta.relativedelta(days=1)
        final_date = start_date + a_month
        final_date += a_day
    else:
        a_year = dateutil.relativedelta.relativedelta(years=period_length)
        a_day = dateutil.relativedelta.relativedelta(days=1)
        final_date = start_date + a_year
        final_date += a_day

    return final_date


def addCustomUnits(distributor):
    """
    Assign custom units to distributors when creating a profile
    """
    unitsJson = [
        {
            "name": "Tonne",
            "symbol": "T"
        },
        {
            "name": "Kilogram",
            "symbol": "Kg"
        },
        {
            "name": "Grams",
            "symbol": "g"
        },
        {
            "name": "Litres",
            "symbol": "ltr"
        },
        {
            "name": "Millilitres",
            "symbol": "Ml"
        },
        {
            "name": "Milligrams",
            "symbol": "mg"
        },
        {
            "name": "Pound",
            "symbol": "p"
        },
        {
            "name": "Unit",
            "symbol": "Unit"
        },
        {
            "name": "PCS",
            "symbol": "PCS"
        }
    ]
    for unit in unitsJson:
        munit = MUnit(distributor=distributor,
                      name=unit['name'], symbol=unit['symbol'])
        munit.save()

    return True


def checkCurrentProgress(distributor):
    """
    Tracks current progress of the distributor when creating profile
    """
    email_settings = DistEmailSettings.objects.filter(
        distributor=distributor).first()
    products = Product.objects.filter(distributor=distributor).count()
    sale_people = SalesMan.objects.filter(distributor=distributor).count()
    regions = DistRegion.objects.filter(distributor=distributor).count()
    retailers_count = Retailer.objects.filter(
        distributors__in=[distributor]).count()
    units = PriceLevel.objects.filter(distributor=distributor).count()
    categories = PCategory.objects.filter(distributor=distributor).count()
    offers = PriceOffer.objects.filter(distributor=distributor).count()

    email_complete = False
    product_complete = False
    sales_complete = False
    regions_complete = False
    retailers_complete = False
    units_complete = False
    category_complete = False
    offer_complete = False

    if email_settings:
        email_complete = True
    if products > 0:
        product_complete = True
    if sale_people > 0:
        sales_complete = True
    if regions > 0:
        regions_complete = True
    if retailers_count > 0:
        retailers_complete = True
    if units > 0:
        units_complete = True
    if categories > 0:
        category_complete = True
    if offers > 0:
        offer_complete = True

    return {
        "Settings": email_complete,
        "Units": units_complete,
        "Categories": category_complete,
        "Products": product_complete,
        "Offers": offer_complete,
        "Sales People": sales_complete,
        "Regions": regions_complete,
        "Retailers": retailers_complete,
    }


def distributor_price_list(distributor, level, product, qty):
    """
    Calculates price lists that apply when creating a dist order
    """
    try:
        price = product.price
        dist_settings = DistributorOptions.objects.filter(
            distributor=distributor).first()
        if dist_settings is None:
            dist_settings = DistributorOptions()
            dist_settings.distributor = distributor
            dist_settings.use_price_list = True
            dist_settings.save()
            return price
        if not dist_settings.use_price_list:
            print("Quantity", qty, "For Product", product.name, "No Match")
            return price

        # retailer_profile = RetailerProfile.objects.filter(retailer=retailer, distributor=distributor).first()
        today = datetime.today()
        price_list = PriceList.objects.filter(distributor=distributor, product=product,
                                              price_level=level, date_from__lte=today,
                                              min_amount__lte=qty, max_amount__gte=qty).order_by('-max_amount').first()
        if price_list is None:
            print("Quantity", qty, "For Product", product.name, "No Match")
            return price.amount
        print("\n\nApplied Price List", str(
            price_list), price_list.product.name)
        amount = (price_list.rate - price_list.discount_amount) * \
            ((100 - price_list.discount_percent) / 100)
        price = Money(str(amount), price.currency)
        print("Resolved Price", price, "\n\n\n")
        return amount
    except Exception as e:
        print("Exception Occurred___ ", str(e))
        traceback.print_exc()
        return 0


def retailer_price_list_product_price(distributor, retailer, product, qty):
    """
    Used to calculate price list on retailer orders for retailers
    """
    try:

        price = product.price
        dist_settings = DistributorOptions.objects.filter(
            distributor=distributor).first()
        if dist_settings is None:
            dist_settings = DistributorOptions()
            dist_settings.distributor = distributor
            dist_settings.use_price_list = True
            dist_settings.save()
            return price
        if not dist_settings.use_price_list:
            # print("Quantity", qty, "For Product", product.name, "No Match")
            return price

        retailer_profile = RetailerProfile.objects.filter(
            retailer=retailer, distributor=distributor).first()

        if retailer_profile is None:
            return price
        today = datetime.today()
        price_list = PriceList.objects.filter(distributor=distributor, product=product,
                                              price_level=retailer_profile.price_level, date_from__lte=today,
                                              min_amount__lte=qty, max_amount__gte=qty).order_by('-date_from').order_by(
            '-max_amount').first()
        if price_list is None:
            # print("Quantity", qty, "For Product", product.name, "No Match")
            return price
        # print("\n\n Applied Price List", str(price_list), price_list.product.name)
        amount = (price_list.rate - price_list.discount_amount) * \
            ((100 - price_list.discount_percent) / 100)
        price = Money(str(amount), price.currency)
        # print("Resolved Price", price, "\n\n\n")
        return price
    except Exception as e:
        print("___\tException Occurred\t___ ", str(e))
        traceback.print_exc()
        return 0


def random_price_lists(product, price_level_id):
    """
    Generates a random price for test purposes
    """
    first_min = random.randint(0, 7)
    first_max = random.randint(7, 11)
    dist_id = product.distributor.id
    price_from = product.price.amount
    for i in range(random.randint(0, 15)):
        price_list = PriceList()
        price_list.price_level_id = price_level_id
        price_list.distributor_id = dist_id
        price_list.product = product
        price_list.min_amount = first_min
        price_list.max_amount = first_max
        price_list.date_from = datetime(
            2021, random.randint(1, 6), random.randint(1, 28))
        price_list.rate = float(
            random.randint(int(float(price_from) * float(random.randint(8, 11) / 11)),
                           int(price_from)))
        price_list.discount_percent = float(random.randint(0, 10))
        price_list.discount_amount = float(
            random.randint(0, int(product.price.amount / 5)))
        price_list.save()
        first_min = price_list.max_amount
        first_max = first_max + random.randint(1, 15)
        price_from = price_list.rate
    print("Added Price List")


def save_random_pricelists(distributor_id):
    """
    Saves randomly generated price lists
    """
    distributor = Distributor.objects.get(id=distributor_id)
    price_levels = PriceLevel.objects.filter(distributor=distributor).all()
    products = Product.objects.filter(distributor=distributor).all()
    for prl in price_levels:
        for product in products:
            random_price_lists(product, prl.id)
        print("Added Random Price List")


def customEncrypt(txt):
    """
     * Best encryption type that converts to string \n
      Please do not use binary types they are not accepted by the browser url
     """
    try:
        # convert integer etc to string first
        txt = str(txt)
        # get the key from settings
        cipher_suite = Fernet(settings.ENCRYPT_KEY)  # key should be byte
        # #input should be byte, so convert the text to byte
        encrypted_text = cipher_suite.encrypt(txt.encode('ascii'))
        # encode to urlsafe base64 format
        encrypted_text = base64.urlsafe_b64encode(
            encrypted_text).decode("ascii")
        return encrypted_text

    except Exception as e:
        # log the error if any
        logging.getLogger("error_logger").error(traceback.format_exc())
        return None


def customDecrypt(txt):
    """
    !Decryption for sending forgot password
    """
    try:
        # base64 decode\
        txt = base64.urlsafe_b64decode(txt)
        cipher_suite = Fernet(settings.ENCRYPT_KEY)
        decoded_text = cipher_suite.decrypt(txt).decode("ascii")
        return decoded_text
    except Exception as e:
        # log the error
        logging.getLogger("error_logger").error(traceback.format_exc())
        return None


def generateRandomString(length=10):
    unique_id = get_random_string(length=length)
    return unique_id


class RenderToPdf:
    # * Create method to create pdf
    @staticmethod
    def create_pdf(view_template, context):
        # * use weazy print for creating pdf
        # * Requires extra steps on windows
        try:
            # html = loader.render_to_string(view_template, context)
            # output = pdfkit.from_string(html, output_path=False)
            # response = HttpResponse(content_type="application/pdf")
            # response.write(output)
            # return response

            html_string = render_to_string(view_template, context)
            html = HTML(string=html_string)
            css = CSS('./static/newCSS/invoice_order_pdf.css')
            print(css)
            # result = html.write_pdf()

            main_doc = html.render(stylesheets=[css])
            pdf = main_doc.write_pdf()
            return HttpResponse(pdf, content_type='application/pdf')

            # return HttpResponse("Not found")
        except:
            print(traceback.format_exc())
            return HttpResponse(str(traceback.format_exc()), status=404)

    @staticmethod
    def render(template, context):
        template = get_template(template)
        html = template.render(context)
        response = BytesIO()
        pdf = pisa.pisaDocument(BytesIO(html.encode("UTF-8")), response)
        response.seek(0)
        if not pdf.err:
            return FileResponse(response, as_attachment=True, filename='delivery_report.pdf')
        else:
            return HttpResponse("Error Rendering PDF", status=404)


def str_to_bool(s):
    if s == 'True' or s == 'true':
        return True
    else:
        return False


def get_order_ref(order):
    distributor_name = order.distributor.name
    v_ref = "NET" + "00" + str(order.ref_number)
    if len(distributor_name) > 1:
        split_word = distributor_name.split(' ')
        if len(split_word) > 1:
            first_character = split_word[0][:1]
            second_character = split_word[1][:1]
            v_ref = str(first_character) + str(second_character) + \
                "00" + str(order.ref_number)
        else:
            v_ref = str(
                distributor_name[:1]) + str(distributor_name[:2]) + "00" + str(order.ref_number)
    else:
        v_ref = str(distributor_name) + "00" + str(order.ref_number)
    return v_ref.upper()
