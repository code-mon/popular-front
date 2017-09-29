import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MovieCard from '../MovieCard.js';
const Waypoint = require('react-waypoint');

Enzyme.configure({ adapter: new Adapter() });

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
