import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import BlogDetails from "../components/blog/blog-details";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const BlogDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='News Details' />
      <BlogDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
