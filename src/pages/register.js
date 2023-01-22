import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Register from "../components/section/register";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const RegisterV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Account' subheader='Register' />
      <Register />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default RegisterV1;
