from django.urls import path, include

urlpatterns = [
    path('', include('sales_ms.urls')),
]

