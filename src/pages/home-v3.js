import React from "react";
import Navbar from "../components/global/navbar-v3";
import Banner from "../components/section/banner-v3";
import SearchForm from "../components/section/search-form";
import Features from "../components/section/features-v1";
import ProductSlider from "../components/section/product-slider-v3";
import FeaturedItem from "../components/section/featured-item-v1";
import Video from "../components/section/video-v1";
import Testimonial from "../components/section/testimonial-v3";
import Sponsor from "../components/section/sponsor-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V3 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchForm />
      <Features customClass='le__feature-area section-bg-1--- pt-115 pb-90 mb-120---' />
      <ProductSlider />
      <FeaturedItem />
      <Video />
      <Testimonial />
      <Sponsor />
      <BlogSlider sectionClass='pt-120' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V3;
