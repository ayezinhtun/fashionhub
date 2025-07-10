import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './components/user/Home';
import Navbar from './components/user/Navbar';
import Footer from './components/user/Footer';
import About from './components/user/About';
import Product from './components/user/Product';
import Contact from './components/user/Contact';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Cart from './components/user/Cart';
import Payment from './components/user/Payment';
import Orderconfrim from './components/user/Orderconfrim';

import Layout from './components/admin/Layout.jsx/Layout';
import Overview from './components/admin/Dashboard/Overview';
import Category from './components/admin/Category/Category';
import Customer from './components/admin/Customer/Customer';
import Order from './components/admin/Order/Order';
import Stock from './components/admin/Stock/Stock';
import Seller from './components/admin/Seller/Seller';
import AdminProduct from './components/admin/Product/AdminProduct';


import SellerOverview from './components/seller/Dashboard/SellerOverview';
import SellerLayout from './components/seller/Layout/SellerLayout';
import SellerProduct from './components/seller/Product/SellerProduct';
import SellerOrder from './components/seller/Order/SellerOrder';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/administors');
  const isSellerRoute = location.pathname.startsWith('/seller');

  return (
    <>
      {!isAdminRoute && !isSellerRoute && <Navbar />}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderconfirm" element={<Orderconfrim />} />

        {/* Admin Routes */}
        <Route path="/administors" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="category" element={<Category />} />
          <Route path="customer" element={<Customer />} />
          <Route path="order" element={<Order />} />
          <Route path="stock" element={<Stock />} />
          <Route path="seller" element={<Seller />} />
          <Route path="adminproduct" element={<AdminProduct />} />
        </Route>

        {/* Seller Routes */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerOverview />} />
          <Route path="overview" element={<SellerOverview />} />
          <Route path="product" element={<SellerProduct />} />
          <Route path="order" element={<SellerOrder />} />
        </Route>
      </Routes>

      {!isAdminRoute && !isSellerRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
