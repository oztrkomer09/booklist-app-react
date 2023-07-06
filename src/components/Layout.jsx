import React from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col justify-between">
      <Navbar />
      <div className="h-3/4 mx-2 shadow-inner">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
