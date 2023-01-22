import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Wishlist from "../components/section/wishlist";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const WishlistPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Wishlist' />
      <Wishlist />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default WishlistPage;
