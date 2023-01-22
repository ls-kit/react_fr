import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import ServiceDetails from "../components/section/service-details";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Service_Details = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Service Details' subheader='Property Management' />
      <ServiceDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Service_Details;
