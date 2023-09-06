import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzhhYjBlYjNmYjE0YzA0ODc2YzI1YmIxNDI0M2NiZCIsInN1YiI6IjY0ZDE2MzYyNmQ0Yzk3MDBlYzU4YjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkZrfHNayLG0He9kinamYKtKq9Py8-TCiR3q_k01mNs';
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingMovies = async page => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      page: page,
    },
  });

  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?language=en-US`);

  return data;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });

  return data.results;
};

export const getCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits?language=en-US`);

  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=1`
  );

  return data.results;
};
