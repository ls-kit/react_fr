import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ShogGrid from "../components/shop/shop-grid-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const ShopGrid_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Shop Grid' />
      <ShogGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ShopGrid_V1;
