import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Checkout from "../components/shop/checkout";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const CheckOuttV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Checkout' />
      <Checkout />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default CheckOuttV1;
