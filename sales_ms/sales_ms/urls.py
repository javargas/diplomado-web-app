from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from sales_ms.views.sales_view import SalesList

urlpatterns = [
    path('sales/', SalesList.as_view()),
    path('categories/<int:pk>', CategoryDetail.as_view()),
    path('products/', ProductList.as_view()),
    path('products/<int:pk>', ProductDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)