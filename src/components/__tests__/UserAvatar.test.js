import React from 'react';
import renderer from 'react-test-renderer';
import UserAvatar from '../UserAvatar.js';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  w3: {
    Paa:
      'https://lh6.googleusercontent.com/-daJSSSOVbi4/AAAAAAAAAAI/AAAAAAAADt0/FffcUzgmiwo/s96-c/photo.jpg',
    ofa: 'Jonathan'
  }
};

it('renders correctly', () => {
  const tree = renderer.create(<UserAvatar user={user} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows the users name', () => {
  const wrapper = shallow(<UserAvatar user={user} />);
  expect(wrapper.text()).toBe('Jonathan');
});
