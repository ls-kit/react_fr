import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import TeamDetails from "../components/section/team-details";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Team_Details = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Agent Details' />
      <TeamDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Team_Details;
