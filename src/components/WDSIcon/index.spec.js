import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import WDSIcon from './index';

/* eslint-disable no-alert */

test('Icon with default values', () => {
  const component = renderer.create(
    <WDSIcon icon="cross-tiny" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon with color prop', () => {
  const component = renderer.create(
    <WDSIcon icon="cross-tiny" fill="rgba(1,1,1,0.5)"/>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon with color prop and size', () => {
  const component = renderer.create(
    <WDSIcon icon="cross-tiny" fill="rgba(1,1,1,0.5)" size={10} />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
