import React from "react";
import Navbar from "../components/global/navbar-v3";
import BannerV5 from "../components/section/banner-v5";
import ProductListing from "../components/section/product-listing";
import Featuresv1 from "../components/section/features-v1";
import ProSlider from "../components/section/product-slider-v1";
import Apartment from "../components/section/apartment-v1";
import VideoV1 from "../components/section/video-v1";
import Category from "../components/section/category-v1";
import Testimonial from "../components/section/testimonial-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V5 = () => {
  return (
    <div>
      <Navbar CustomClass='le__header-transparent gradient-color-2' />
      <BannerV5 />
      <ProductListing />
      <Featuresv1 customClass='le__feature-area section-bg-1 pt-120 pb-90 mb-120---' />
      <ProSlider />
      <Apartment />
      <VideoV1 />
      <Category />
      <Testimonial />
      <BlogSlider customClass='section-subtitle-2' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V5;
