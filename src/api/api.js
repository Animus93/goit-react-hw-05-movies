import axios from 'axios';

const apiKeyV4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzViOWVlYjgzZmM3OGExYWQ3OTczOGE4MTBjNTZkZiIsInN1YiI6IjYzOTMxNjc3Y2VlMmY2MDA5MzExM2M3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wM3pFCsG_9GXnQWlWqat3GMYp-exwI3OqqHu5fQeliY';

const headers = {
  Authorization: `Bearer ${apiKeyV4}`,
};

const fetchMovies = (page = 1) => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/week?page=${page}?&language=ru-RU`,
    {
      headers,
    }
  );
};

const fetchSerchMovie = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?&language=ru-RU&query=${query}&page=1`,
    {
      headers,
    }
  );
};

const fetchMovieDetails = queryId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${queryId}?&language=ru-RU`,
    {
      headers,
    }
  );
};

const fetchMovieCast = filmID => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${filmID}/credits?&language=ru-RU`,
    {
      headers,
    });
};

const fetchReview = (filmID) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${filmID}/reviews?&page=1`, {
    headers,
  });
};

const exports = {
  fetchMovies,
  fetchSerchMovie,
  fetchMovieDetails,
  fetchMovieCast,
  fetchReview,
}
export default exports
