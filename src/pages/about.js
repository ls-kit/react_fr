import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import AboutV4 from "../components/section/about-v4";
import Features from "../components/section/features-v1";
import Team from "../components/section/team-v1";
import Testimonial from "../components/section/testimonial-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const About_v1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='About Us' />
      <AboutV4 />
      <Features customClass='le__feature-area section-bg-1 pt-120 pb-90 mb-120---' />
      <Team />
      <Testimonial />
      <BlogSlider />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default About_v1;
