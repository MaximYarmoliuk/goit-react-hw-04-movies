import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '../../assets/404.jfif';
import styles from "./NotFound.module.css"

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.status}>404</h1>
    <img src={imagePath} alt="not found" width="320" />
    <p>
      Oops, page not found. Click <Link to="/">HERE</Link> for go to the main page.
    </p>
  </div>
);

export default NotFound;