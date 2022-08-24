import React from "react";
import Header from "./Header";

const Layout = ({ children, location }) => {
  return (
    <div>
      <header>
        <nav>{<Header location={location} />}</nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
