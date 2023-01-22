import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import BlogLeft from "../components/blog/blog-list";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const BlogLeftSidebar = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Blog Left Sidebar' subheader='Blog' />
      <BlogLeft />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default BlogLeftSidebar;
