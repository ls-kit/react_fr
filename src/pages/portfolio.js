import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import PortfolioV1 from "../components/section/portfolio-v1";
import CallToActonV2 from "../components/section/call-to-action-v2";
import BlogSlider from "../components/blog/blog-slider-v1";
import Sponsor from "../components/section/sponsor-v2";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Portfolio_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our Portfolio' subheader='Portfolio' />
      <PortfolioV1 />
      <CallToActonV2 />
      <BlogSlider sectionClass='pt-120' />
      <Sponsor />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Portfolio_V1;
