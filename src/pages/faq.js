import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Faq from "../components/section/faq-v1";
import Counter from "../components/section/counter-v1";
import BlogSlider from "../components/blog/blog-slider-v1";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const FaqV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Frequently asked questions' subheader='FAQ' />
      <Faq />
      <Counter />
      <BlogSlider sectionClass='pt-120' />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default FaqV1;
