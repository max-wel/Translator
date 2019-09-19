import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Select from './components/Select';
import TextArea from './components/TextArea';

describe('Root component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders two <Select /> and <TextArea />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Select)).toHaveLength(2);
    expect(wrapper.find(TextArea)).toHaveLength(2);
  });
});
