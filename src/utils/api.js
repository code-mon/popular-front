import axios from 'axios';

const TMDB_KEY = '2ae29cc0870029d6246318d7ae859e55';

const baseConfig = {
  api_key: TMDB_KEY,
  language: 'en-US'
};

function getPageOfMovies({ url = '', page = 1 } = {}) {
  // requires calling function to pass a url of format https://api.themoviedb.org/3/discover/movie
  if (typeof url != 'string' || url === '') {
    throw new Error('No API URL provided');
  }

  const config = {
    ...baseConfig,
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    page
  };
  return axios.get(url, config);
}

export { getPageOfMovies };
