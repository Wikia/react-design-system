import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Search from './Search';

const search = {
  url: 'http://fandom.wikia.com',
  param: 's',
  label: 'Search',
  placeholder_active: 'Placeholder Active',
  placeholder_inactive: 'Placeholder Inactive',
  tracking_label: 'search',
};

test('Search should render correctly', () => {
  const component = renderer.create(
    <Search {...search} onStateChange={() => null} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Click on the search should invoke onStateChange', () => {
  const mockedCallback = sinon.spy();
  const wrapper = mount(
    <Search {...search} onStateChange={mockedCallback} />
  );

  expect(wrapper.state().searchIsFocused).toBe(false);
  wrapper.find('.wds-global-navigation__search-input-wrapper > input').simulate('focus');
  expect(wrapper.state().searchIsFocused).toBe(true);
  wrapper.find('.wds-global-navigation__search-input-wrapper > input').simulate('blur');
  expect(wrapper.state().searchIsFocused).toBe(false);

  expect(mockedCallback.callCount).toBe(2);
});

test('Empty state is handled properly', () => {
  const wrapper = mount(
    <Search {...search} onStateChange={() => null} />
  );

  expect(wrapper.state().searchIsEmpty).toBe(true);
  wrapper.instance().searchChange({target: {value: 'value'}});
  expect(wrapper.state('searchIsEmpty')).toBe(false);
});

test('Focus change is handled properly', () => {
});
