from django.db import models

class Sales(models.Model):

    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 20)
    id_product = models.IntegerField(max_length = 140)

    class Meta:
        app_label = 'sales_ms'
