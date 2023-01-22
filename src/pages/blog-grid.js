import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import BlogGrid from "../components/blog/blog-grid";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const BlogGridPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Blog Grid' />
      <BlogGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default BlogGridPage;
