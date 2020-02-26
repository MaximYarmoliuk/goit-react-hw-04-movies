import React from "react";
import Loader from "react-loader-spinner";
import styles from './Spinner.module.css'

const Spinner = () => (
  <div className={styles.spinner}>
    <Loader type="Oval" color="#00BFFF" height={40} width={40} />
  </div>
);

export default Spinner;
