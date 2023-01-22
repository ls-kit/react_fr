import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Cart from "../components/shop/cart";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Cart_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Cart' />
      <Cart />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Cart_V1;
