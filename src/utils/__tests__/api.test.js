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
  const testConfig = {
    test: true
  };
  getPageOfMovies(fakeAxios).then(response => {
    expect(response.config).toEqual({
      api_key: TMDB_KEY,
      language: 'en-US',
      test: true
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
