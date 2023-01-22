import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import MyAccount from "../components/shop/my-account";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const MyaccountV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='My Account' />
      <MyAccount />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default MyaccountV1;
