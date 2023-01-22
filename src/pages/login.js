import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Login from "../components/section/login";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const LoginV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Account' subheader='Login' />
      <Login />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default LoginV1;
