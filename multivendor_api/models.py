from django.db import models
from django.contrib.auth.models import User

# Vendor Models 
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    adress = models.TextField(null=True)

    def __str__(self):
        return self.user.username
    

# Products Categroy Models
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField()
    dateadd = models.DateField()

    def __str__(self):
        return self.title
    
    
# Products Categroy Models
class Product(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField()
    price = models.FloatField()
    image = models.ImageField()
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL,null=True)
    dateadd = models.DateField()

    def __str__(self):
        return self.title
    
# Customer Model 
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    adress = models.TextField()
    mobile = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username

# Order Model 
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

    

# Order Item Model
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title

    

    

