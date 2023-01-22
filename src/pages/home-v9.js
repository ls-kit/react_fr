import React from "react";
import TopBar from "../components/global/topbar";
import Navbar from "../components/global/navbar-v2";
import BannerV7 from "../components/section/banner-v8";
import Aboutv3 from "../components/section/about-v3";
import Video from "../components/section/video-v2";
import Featuresv1 from "../components/section/features-v1";
import UpComingProduct from "../components/section/upcoming-product-v1";
import ApartmentV2 from "../components/section/apartment-v2";
import ProductSlider from "../components/section/product-slider-v2";
import Availability from "../components/section/availability";
import Neighbour from "../components/section/neighbour";
import Cateogory from "../components/section/category-v2";
import Testimonial from "../components/section/testimonial-v2";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V8 = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BannerV7 />
      <Aboutv3 />
      <Video />
      <Featuresv1 customClass='le__feature-area section-bg-1--- pt-115 pb-90 mb-120---' />
      <UpComingProduct />
      <ApartmentV2 />
      <ProductSlider />
      <Availability />
      <Neighbour />
      <Cateogory />
      <Testimonial />
      <BlogSlider customClass='section-subtitle-2' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V8;
