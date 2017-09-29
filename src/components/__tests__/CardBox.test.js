import React from 'react';
import renderer from 'react-test-renderer';
import Radium from 'radium';

import CardBox from '../CardBox.js';

// disable Radium errors for testing
Radium.TestMode.enable();

it('renders correctly', () => {
  const tree = renderer.create(<CardBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
