import React from "react";
import Navbar from "../components/global/navbar-v5";
import Banner from "../components/section/banner-v2";
import Category from "../components/section/category-v3";
import ApartmentV2 from "../components/section/apartment-v2";
import ProductSlider from "../components/section/product-slider-v2";
import Availability from "../components/section/availability";
import Neighbour from "../components/section/neighbour";
import Cateogory from "../components/section/category-v2";
import Testimonial from "../components/section/testimonial-v2";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V11 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <ApartmentV2 customClass='pt-90' />
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

export default Home_V11;
