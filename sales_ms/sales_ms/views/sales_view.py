from sales_ms.models.sales_model import Sales
from sales_ms.serializers.sales_serializer import SalesSerializer
from rest_framework import mixins
from rest_framework import generics

class SalesList(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                generics.GenericAPIView):

    queryset = Sales.objects.all()
    serializer_class = SalesSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

