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
    product_rating = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = models.Product
        fields = ['id','title', 'detail', 'price', 'image','category','vendor','dateadd', 'product_rating']

    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    product_rating = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = models.Product
        fields = ['id', 'title', 'detail', 'price', 'image','category','vendor','dateadd', 'product_rating']

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

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id', 'order', 'product']
    
    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order','product']

    def __init__(self, *args, **kwargs):
        super(OrderItemsSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta: 
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductRatingSerialiser(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id', 'customer', 'product', 'rating', 'reviews', 'add_time']

    def __init__(self, *args, **kwargs):
        super(ProductRatingSerialiser, self).__init__(*args, **kwargs)
        self.Meta.depth = 1 