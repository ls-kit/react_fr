import React from "react";
import Navbar from "../components/global/navbar";
import Banner from "../components/section/banner";
import SearchForm from "../components/section/search-form";
import Aboutv1 from "../components/section/about-v1";
import Counter from "../components/section/counter-v1";
import AboutV2 from "../components/section/about-v2";
import Featuresv1 from "../components/section/features-v1";
import ProSlider from "../components/section/product-slider-v1";
import Apartment from "../components/section/apartment-v1";
import VideoV1 from "../components/section/video-v1";
import Category from "../components/section/category-v1";
import Testimonial from "../components/section/testimonial-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchForm />
      <Aboutv1 />
      <Counter />
      <AboutV2 />
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

export default Home_V1;
