import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const node = shallow(<App />);
  expect(node.exists()).toBe(true);
});
