import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const data = {
  firstName: 'John',
  lastName: 'Irwin',
  company: 'Artforum',
  title: 'Founder'
};

describe('The Form component', function() {
  it('renders a form element', function() {
    const wrapper = shallow(<Form data={data} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});
