import { getPageOfMovies } from '../api.js';

test('getPageOfMovies throws an error without a URL', () => {
  expect(() => {
    getPageOfMovies();
  }).toThrow();
});

test('getPageOfMovies returns a promise', () => {
  const result = getPageOfMovies({ url: 'localhost' });
  expect(result).toBeInstanceOf(Promise);
});
