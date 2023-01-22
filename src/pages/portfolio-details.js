import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import PortfolioDetails from "../components/section/portfolio-details";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Portfolio_Details = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Portfolio Details' />
      <PortfolioDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Portfolio_Details;
