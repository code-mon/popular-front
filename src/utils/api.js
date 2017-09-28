const TMDB_KEY = '2ae29cc0870029d6246318d7ae859e55';

// config options used across API endpoints
const baseConfig = {
  api_key: TMDB_KEY,
  language: 'en-US'
};

function getPageOfMovies(fn, { page = 1, sort_by = 'popularity.desc' } = {}) {
  // requies function for fetching data be passed in as first parameter
  if (typeof fn != 'function') {
    throw new Error('Fetch function not passed in to API call');
  }

  // merge config objects for axios
  const config = {
    params: {
      ...baseConfig,
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page
    }
  };
  return fn('https://api.themoviedb.org/3/discover/movie', config);
}

export { getPageOfMovies };
