import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import TrackOrder from "../components/shop/order-tracking";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const OrderTracking = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Order Tracking' />
      <TrackOrder />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default OrderTracking;
