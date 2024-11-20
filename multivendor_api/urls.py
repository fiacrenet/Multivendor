from django.urls import path, include
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),
    path('category/',views.ProductCategoryList.as_view()),
    path('categorydetail/<int:pk>/', views.ProductCategoryDetail.as_view()),
    path('product/', views.ProductList.as_view()),
    path('productdetail/<int:pk>/', views.ProductDetail.as_view()),
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>/', views.OrderDetail.as_view()),
   # path('orderitems/', views.OrderItemsList.as_view()),
]