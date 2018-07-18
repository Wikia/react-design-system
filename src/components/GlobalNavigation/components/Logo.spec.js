import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

test('Logo should render logo without edition', () => {
  const component = renderer.create(
    <Logo href="http://example.com" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Logo should render logo with edition', () => {
  const component = renderer.create(
    <Logo href="http://example.com" edition="UK" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
