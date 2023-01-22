import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ShopLeftSidebar from "../components/shop/shop-left-sidebar";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const ShopLeftSidebarPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Shop Left Sidebar' />
      <ShopLeftSidebar />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ShopLeftSidebarPage;
