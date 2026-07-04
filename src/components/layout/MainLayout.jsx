import React from "react";
import PageWrapper from "./PageWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </PageWrapper>
  );
};

export default MainLayout;
