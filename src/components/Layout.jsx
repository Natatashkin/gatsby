import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>{<Header />}</nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
