import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './TextArea';

const props = {
  name: '',
  placeholder: '',
  value: '',
  onChange: () => {}
};

describe('<TextArea />', () => {
  it('renders a <TextArea /> component', () => {
    const output = renderer.create(<TextArea {...props} />);
    expect(output).toMatchSnapshot();
  });
});
