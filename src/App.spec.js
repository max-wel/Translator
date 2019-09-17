import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Root component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
