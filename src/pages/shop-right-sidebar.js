import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ShopRightSidebar from "../components/shop/shop-right-sidebar";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const ShopRightSidebarPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Shop Right Sidebar' />
      <ShopRightSidebar />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ShopRightSidebarPage;
