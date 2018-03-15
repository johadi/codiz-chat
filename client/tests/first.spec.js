import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/components/App';

describe('First test', () => {
  const wrapper = mount(<MemoryRouter>
      <App/>
    </MemoryRouter>);

  it('It should render App', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('It should have 3 navigation links', () => {
    expect(wrapper.find('Link').length).toBe(4);
  });
  it('It should have navigation links with text "Home"', () => {
    expect(wrapper.find('Link').at(0).text()).toBe('Home');
  });
});
