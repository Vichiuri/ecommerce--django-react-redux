"""
.
"""
from django.db.models import Sum
from rest_framework.views import APIView
from distributor.commons import RenderToPdf
from distributor.models import Delivery, PartialDelivery, RetailerProfile


class SalesOrderPrint(APIView):
    def get(self, request, delivery_id):
        delivery = Delivery.objects.get(id=delivery_id)
        distributor = delivery.distributor
        ret_order = delivery.order
        retailer = ret_order.retailer
        retail_profile = RetailerProfile.objects.filter(retailer=retailer, distributor=distributor).first()
        all_orders = ret_order.ret_orders.all()
        url_host = request.get_host()

        context = {"delivery": delivery, 'distributor': distributor, "all_orders": all_orders, "ret_order": ret_order,
                   'retailer': retail_profile, 'url_host': url_host}

        return RenderToPdf.create_pdf('pdfs/invoice_order_pdf.html', context)


class SalePartialOrderPrint(APIView):
    def get(self, request, delivery_id):
        delivery = PartialDelivery.objects.get(id=delivery_id)
        ret_order = delivery.previous_order
        distributor = ret_order.distributor
        retailer = ret_order.retailer
        retail_profile = RetailerProfile.objects.filter(retailer=retailer, distributor=distributor).first()
        all_orders = delivery.current_orders.filter(qty__gt=0)
        url_host = request.get_host()

        context = {"delivery": delivery, 'distributor': distributor, "all_orders": all_orders, "ret_order": ret_order,
                   'retailer': retail_profile, 'url_host': url_host}
        return RenderToPdf.create_pdf('pdfs/invoice_order_pdf.html', context)
