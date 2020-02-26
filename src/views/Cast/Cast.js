import React, { Component } from "react";
import Spinner from "../../components/Spinner/Spinner";
import movieApi from "../../servises/movieApi";

export default class Cast extends Component {
  state = {
    actors: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then(actors => this.setState({ actors }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;

    return (
      <>
        {loading && <Spinner />}
        {!loading && actors.length > 0 && (
          <ul>
            {actors.map(actor => (
              <li key={actor.cast_id}>
                <p>Сharacter:{actor.character}</p> <p>Actor:{actor.name}</p>
              </li>
            ))}
          </ul>
        )}
        {actors.length === 0 && (
          <p>Oops, we don`t have any information about actors in this movie</p>
        )}
      </>
    );
  }
}
