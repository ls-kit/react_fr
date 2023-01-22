import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import Error from "../components/section/error";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='404 Page' />
      <Error />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ErrorPage;
