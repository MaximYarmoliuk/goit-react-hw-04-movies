import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import propTypes from "prop-types";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <hr />
    {children}
  </div>
);

Layout.propTypes ={
  children: propTypes.element.isRequired
}

export default Layout;
