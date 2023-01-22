import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Location from "../components/section/location";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const LocationPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Location' customclass='mb-0' />
      <Location />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default LocationPage;
