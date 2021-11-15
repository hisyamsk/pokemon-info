import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="container my-5">{children}</main>
    </>
  );
};

export default Layout;
