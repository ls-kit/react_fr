import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ProductSlider from "../components/shop/product-slider-v1";
import ProductDetails from "../components/shop/shop-details";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Product_Details = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Product Details' customclass='mb-0' />
      <ProductSlider />
      <ProductDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Product_Details;
