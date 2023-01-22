import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import AboutV5 from "../components/section/about-v5";
import ServiceV1 from "../components/section/service-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Service_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='What We Do' subheader='Service' />
      <AboutV5 />
      <ServiceV1 />
      <BlogSlider sectionClass='pt-120' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Service_V1;
