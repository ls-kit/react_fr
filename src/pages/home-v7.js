import React from "react";
import Navbar from "../components/global/navbar-v4";
import BannerV6 from "../components/section/banner-v6";
import Aboutv2 from "../components/section/about-v2";
import Featuresv1 from "../components/section/features-v1";
import ProSlider from "../components/section/product-slider-v4";
import BlogSlider from "../components/blog/blog-slider-v1";
import Gallery from "../components/section/gallery-v1";
import Apartment from "../components/section/apartment-v1";
import VideoV1 from "../components/section/video-v1";
import Category from "../components/section/category-v1";
import Testimonial from "../components/section/testimonial-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V7 = () => {
  return (
    <div>
      <Navbar CustomClass='le__header-transparent gradient-color-2' />
      <BannerV6 />
      <Aboutv2 />
      <Featuresv1 customClass='le__feature-area section-bg-1 pt-120 pb-90 mb-120---' />
      <ProSlider />
      <Gallery />
      <Apartment CustomClass='pt-115' />
      <VideoV1 />
      <Category />
      <Testimonial />
      <BlogSlider customClass='section-subtitle-2' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V7;
