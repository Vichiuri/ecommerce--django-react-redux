from django.shortcuts import render

# Create your views here.
def index(request):
    """
    Entry page to Distributor website
    """
    return render(request, 'front_end_view.html')

def restrictedView(request):
    """
    Forbidden Page View
    """
    return render(request, '403.html')

def handler404(request, exception):
    """
    Page not found view
    """
    return render(request, '404.html', status=404)

def handler500(request):
    """
    Error page view for distributor
    """
    return render(request, '500.html', status=500)

def handler402(request):
    """
    Subscription expired page
    """
    return render(request, '402.html')