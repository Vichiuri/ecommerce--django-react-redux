from django.core.management import BaseCommand
from datetime import datetime, timedelta
from distributor.models.distributor import MNotification
from distributor.threading import MobileAutomatedThreading

class Command(BaseCommand):
    help = "Send retailer automated notifications"

    def handle(self, *args, **options):
        
        date_today = datetime.today()
        notifications = MNotification.objects.filter(show_from__lte=date_today, show_to__gte=date_today, is_automated=True)
        
        for notify in notifications:
            MobileAutomatedThreading(notify).start()
       
        print("Notifications have been sent")