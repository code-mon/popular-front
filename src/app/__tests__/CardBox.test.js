import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import CardBox from '../HomePage/components/CardBox.js';

it('has an InfiniteScroll', () => {
  const wrapper = shallow(<CardBox />);
  expect(wrapper.find(InfiniteScroll)).toHaveLength(1);
});
