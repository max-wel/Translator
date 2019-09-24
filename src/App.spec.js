import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Select from './components/Select';
import TextArea from './components/TextArea';

describe('Root component', () => {
  it('renders two <Select /> and <TextArea /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Select)).toHaveLength(2);
    expect(wrapper.find(TextArea)).toHaveLength(2);
  });

  it('renders an alert-box on error', () => {
    const wrapper = shallow(<App error="error" />);
    expect(wrapper.contains('error')).toBeTruthy();
  });

  it('renders a <TextArea /> component containing translation', () => {
    const wrapper = shallow(<App translation="hello" />);
    expect(
      wrapper.containsMatchingElement(
        <TextArea name="translatedText" value="hello" readOnly />
      )
    ).toBeTruthy();
  });
});
