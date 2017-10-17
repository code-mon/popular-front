import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../HomePage/components/MovieCard/MovieCard.js';
const Waypoint = require('react-waypoint');

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieCard movieTitle="Die Hard" movieBackdrop="/" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('has a WayPoint wrapper', () => {
  const wrapper = shallow(
    <MovieCard movieTitle="Die Hard" movieBackdrop="/" />
  );
  expect(wrapper.find(Waypoint)).toHaveLength(1);
});

it('has a movie title', () => {
  const wrapper = shallow(
    <MovieCard movieTitle="Die Hard" movieBackdrop="/" />
  );
  const card = wrapper.children();
  expect(card.text()).toEqual('Die Hard');
});

it('toggles visibility', () => {
  const wrapper = shallow(
    <MovieCard movieTitle="Die Hard" movieBackdrop="/" />
  );
  expect(wrapper.state('visible')).toBe(false);
  wrapper.simulate('enter');
  expect(wrapper.state('visible')).toBe(true);
  wrapper.simulate('leave');
  expect(wrapper.state('visible')).toBe(false);
});
