import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Select from './Select';

const props = {
  name: '',
  value: '',
  onChange: () => {}
};

describe('<Select />', () => {
  it('renders a <Select /> component', () => {
    const output = renderer.create(<Select {...props} />);
    expect(output).toMatchSnapshot();
  });
});
