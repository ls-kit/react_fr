import React from "react";
import Navbar from "../components/global/navbar";
import PageHeader from "../components/global/page-header";
import BlogRightSidebar from "../components/blog/blog-right-sidebar";
import CallToActionV1 from "../components/section/call-to-action-v1";
import Footer from "../components/global/footer";

const BlogRightSidebarPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Blog Right Sidebar' subheader='Blog' />
      <BlogRightSidebar />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default BlogRightSidebarPage;
