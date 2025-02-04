import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
