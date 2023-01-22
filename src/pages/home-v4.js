import React from "react";
import TopBar from "../components/global/topbar";
import Navbar from "../components/global/navbar-v2";
import Banner from "../components/section/banner-v4";
import SearchForm from "../components/section/search-form";
import Category from "../components/section/category-v3";
import Service from "../components/section/service-v2";
import CallToActionV3 from "../components/section/call-to-action-v3";
import Video from "../components/section/video-v3";
import Brand from "../components/section/brand";
import Testimonial from "../components/section/testimonial-v4";
import Gallery from "../components/section/gallery-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Home_V1 = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <SearchForm />
      <Category />
      <Service />
      <CallToActionV3 />
      <Video />
      <Brand />
      <Testimonial />
      <Gallery />
      <BlogSlider sectionClass='pt-90' customClass='section-subtitle-2' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V1;
