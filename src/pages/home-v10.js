import React from "react";
import TopBar from "../components/global/topbar";
import Navbar from "../components/global/navbar-v2";
import Map from "../components/section/map-v2";
import SearchFormV2 from "../components/section/search-form-v2";
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
      <Map />
      <SearchFormV2 />
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
