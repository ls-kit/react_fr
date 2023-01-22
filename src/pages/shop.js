import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ShogGrid from "../components/shop/shop-right-sidebar";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Shop_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Shop' />
      <ShogGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Shop_V1;
