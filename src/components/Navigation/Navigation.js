import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css'

const Navigation = () => (
  <ul>
    <li className={styles.navigationItem}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to={routes.home}
        exact
      >
        Home
      </NavLink>
    </li>
    <li className={styles.navigationItem}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to={routes.movies}
      >
        Search movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;