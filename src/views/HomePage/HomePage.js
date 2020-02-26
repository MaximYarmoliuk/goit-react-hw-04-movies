import React, { Component } from "react";
import { Link } from "react-router-dom";
import movieApi from "../../servises/movieApi";
import styles from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.fetchPopularMovies();
  }

  fetchPopularMovies = () => {
    movieApi.fetchPopularMovies().then(movies => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>List of popular movies</h1>
        {
          <ul>
            {movies.map(movie => (
              <li key={movie.id} className={styles.item}>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location }
                  }}
                >
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}
