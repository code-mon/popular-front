import React from 'react';
import renderer from 'react-test-renderer';
import Radium from 'radium';

import TitleBar from '../TitleBar.js';

Radium.TestMode.enable();

it('renders correctly', () => {
  const tree = renderer.create(<TitleBar>POPULAR</TitleBar>).toJSON();
  expect(tree).toMatchSnapshot();
});
