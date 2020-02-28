import React, { Component } from "react";
import ListOfMovies from '../ListOfMovies/ListOfMovies';
import movieApi from "../../servises/movieApi";

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
          <ListOfMovies movies={movies}/>
        }
      </>
    );
  }
}
