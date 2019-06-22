import React from 'react';
import renderer from 'react-test-renderer';

import InputField from './InputField';

describe('InputField Component', function () {
  it('should render correctly', () => {
    const tree = renderer.create(<InputField />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});