import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams";
import Searchbox from "../../components/Searchbox/Searchbox";
import Spinner from "../../components/Spinner/Spinner";
import movieApi from "../../servises/movieApi";
import styles from "./MoviesPage.module.css";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    loading: true,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: false });
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    this.setState({ loading: true });
    this.setState({ query: query });
    movieApi
      .fetchMovieWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
  };

  render() {
    const { movies, loading, query } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading && <Spinner />}

        {movies.length > 0 && (
          <>
            <h2>A list of movies on demand: {query}</h2>
            <ul>
              {movies.map(movie => (
                <li key={movie.id} className={styles.item}>
                  <Link
                    className={styles.link}
                    to={{
                      pathname: `${match.url}/${movie.id}`,
                      state: { from: this.props.location }
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {!loading && movies.length === 0 && query && (
          <p>Oops, movie not found</p>
        )}
      </>
    );
  }
}
