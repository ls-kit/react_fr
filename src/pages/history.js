import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import HistoryV1 from "../components/section/history";
import WhyChooseUs from "../components/section/why-choose-us";
import CallToActonV4 from "../components/section/call-to-action-v4";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const History = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our History' subheader='History' />
      <HistoryV1 />
      <WhyChooseUs />
      <CallToActonV4 />
      <BlogSlider customClass='pt-120' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default History;
