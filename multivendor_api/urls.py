from django.urls import path, include
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),
    path('category/',views.ProductCategory.as_view()),
    path('categorydetail/<int:pk>/', views.ProductCategoryDetail.as_view()),
    path('product/', views.Product.as_view()),
    path('productdetail/<int:pk>/', views.ProductDetail.as_view()),
    path('customers/',views.Customer.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
]
