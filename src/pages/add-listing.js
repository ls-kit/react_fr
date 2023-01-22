import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import AddListing from "../components/section/add-listing";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const AddListing_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Add Listing' />
      <AddListing />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default AddListing_V1;
