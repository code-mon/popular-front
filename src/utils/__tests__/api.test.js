import { getPageOfMovies } from '../api.js';

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

function fakeAxios(url, config) {
  return new Promise(resolve => {
    resolve({
      url,
      config
    });
  });
}
