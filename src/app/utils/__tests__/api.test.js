import { getPageOfMovies, getCompleteMovieBackdropPath } from '../api.js';

test('getPageOfMovies throws an error without axios', () => {
  expect(() => {
    getPageOfMovies();
  }).toThrow();
});

test('getPageOfMovies calls the proper url', () => {
  getPageOfMovies(fakeAxios).then(response => {
    expect(response.url).toBe('https://api.themoviedb.org/3/discover/movie');
  });
});

test('getPageOfMovies combines the parameters config object', () => {
  getPageOfMovies(fakeAxios).then(response => {
    expect(response.config).toEqual({
      params: {
        api_key: '2ae29cc0870029d6246318d7ae859e55',
        language: 'en-US',
        include_adult: false,
        include_video: false,
        page: 1,
        sort_by: 'popularity.desc'
      }
    });
  });
});

test('getCompleteMovieBackdropPath creates correct string', () => {
  const result = getCompleteMovieBackdropPath('/test');
  expect(result).toBe('https://image.tmdb.org/t/p/w300/test');
});

function fakeAxios(url, config) {
  return new Promise(resolve => {
    resolve({
      url,
      config
    });
  });
}
