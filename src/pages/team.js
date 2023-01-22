import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import TeamV1 from "../components/section/team-v2";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const Team_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our Agent' subheader='Agent' />
      <TeamV1 />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Team_V1;
