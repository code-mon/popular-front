import React from 'react';
import renderer from 'react-test-renderer';

import TitleBar from '../HomePage/components/TitleBar.js';

it('renders correctly', () => {
  const tree = renderer.create(<TitleBar>POPULAR</TitleBar>).toJSON();
  expect(tree).toMatchSnapshot();
});
