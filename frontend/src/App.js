import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Categories from "./components/category/Categories";
import CategoryProduct from "./components/product/CategoryProduct";
import Products from "./components/product/Products";
import ProductDetails from "./components/product/ProductDetails";
import Checkout from "./components/checkout/Checkout";
import CustomerRegister from "./components/customer/CustomerRegister";
import CustomerLogin from "./components/customer/CustomerLogin";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import Order from "./components/order/Order";
import OrderSuccess from "./components/order/OrderSuccess";
import OrderFailure from "./components/order/OrderFailure";
import Wishlist from "./components/customer/Wishlist";
import Profil from "./components/customer/Profil";
import CustomerPwd from "./components/customer/CustomerPwd";
import AddressList from "./components/customer/AddressList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorie" element={<Categories />} />
        <Route
          path="/categorie/:categorie_slug/:categorie_id"
          element={<CategoryProduct />}
        />
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-failure" element={<OrderFailure />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/customer-profil" element={<Profil />} />
        <Route path="/customer-pwd" element={<CustomerPwd />} />
        <Route path="/customer-address" element={<AddressList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
