import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import propTypes from "prop-types";
import styles from "./ListOfMovies.module.css";

class ListOfMovies extends Component {
  static propTypes = {
    match: propTypes.object.isRequired,
    location: propTypes.object.isRequired,
    history: propTypes.object.isRequired
  };

  render() {
    const { location, movies } = this.props;
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link
              className={styles.link}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location }
              }}
            >
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(ListOfMovies);
