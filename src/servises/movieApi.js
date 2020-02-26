const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "704b1cc45ea5b76dec682bc7ffeee869";

const fetchPopularMovies = () => {
  return fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`).then(res =>
    res.json().then(res => res.results)
  );
};

const fetchMovieWithQuery = query => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=1`
  )
    .then(res => res.json())
    .then(res => res.results);
};

const fetchMovieDetails = movieId => {
  return fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`).then(res => {
    const response = res.json();
    if (res.status === 404) {
      throw new Error('Movie not found');
    } else if (res.status !==200) {
      throw new Error(response)
    }
    return response;
  });
};


const fetchMovieCast = movieId => {
  return fetch(
    `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`
  ).then(res => res.json().then(res => res.cast));
};

const fetchMovieReviews = movieId => {
  return fetch(
    `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
  ).then(res => res.json().then(res => res.results));
};

export default {
  fetchPopularMovies,
  fetchMovieWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews
};
