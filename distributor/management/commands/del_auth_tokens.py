from django.core.management import BaseCommand
from knox.models import AuthToken
from datetime import datetime, timedelta
import dateutil

class Command(BaseCommand):
    help = "Delete expired auth tokens"

    def handle(self, *args, **options):
        
        date_today = datetime.today()
        a_month = dateutil.relativedelta.relativedelta(months=1)
        a_day = dateutil.relativedelta.relativedelta(days=1)
        expiry_date = date_today - a_month

        knox_tokens = AuthToken.objects.filter(expiry__lte=expiry_date)

        for token in knox_tokens:
            token.delete()

        print("Expired tokens deleted")