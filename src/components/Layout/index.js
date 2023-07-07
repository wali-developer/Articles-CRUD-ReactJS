import React from "react";
import PageNavbar from "./Navbar";
import PageFooter from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <PageNavbar />
      {children}
      <PageFooter />
    </>
  );
};

export default Layout;
