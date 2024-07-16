"""
Custom Paginator
"""
import random
from django.core.paginator import Paginator
from django.db.models import QuerySet


class CustomPaginator:
    def __init__(self, request, queryset: QuerySet, max_count: int):
        paginator = Paginator(queryset, max_count)
        if not 'page' in request.GET.keys():
            self.page = 1
        else:
            self.page = request.GET["page"]
            if self.page == '':
                self.page = 1
            else:
                self.page = int(self.page)

        if self.page is None:
            self.page = 1
        self.pageList = paginator.get_page(self.page)
        self.last_page = paginator.num_pages
        self.next_page = self.page + 1
        if self.page == 0:
            rand_page = random.randint(1, self.last_page)
            self.pageList = paginator.get_page(rand_page)
            print("Chosen Random Page", rand_page)

        if self.next_page > self.last_page:
            self.next_page = None
