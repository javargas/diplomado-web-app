from rest_framework import serializers
from sales_ms.models.sales_model import Sales

class SalesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sales
        fields = ['id', 'date', 'product_id', 'value']
