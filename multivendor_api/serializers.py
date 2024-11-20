from rest_framework import serializers
from  . import models

# Create VendorSerializer

class VendorSerializer(serializers.ModelSerializer):
    class Meta: 
        model = models.Vendor
        fields = ['id','user', 'adress']
    
    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id','user', 'adress']

    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail', 'dateadd']

    def __init__(self, *args, **kwargs):
        super(ProductCategoryDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductCategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail', 'dateadd']

    def __init__(self, *args, **kwargs):
        super(ProductCategoryDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id','title', 'detail', 'price', 'image','category','vendor','dateadd']

    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id', 'title', 'detail', 'price', 'image','category','vendor','dateadd']

    def __init__(self, *args, **kwargs):
            super(ProductDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user', 'adress','mobile']

    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user', 'adress','mobile']

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer','order_time']

    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = ['id','order','product']

    def __init__(self, *args, **kwargs):
        super(OrderItemSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
