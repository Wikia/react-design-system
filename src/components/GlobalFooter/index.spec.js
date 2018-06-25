import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import GlobalFooter from './index';

test('GlobalFooter should render correctly with default data', () => {
  const component = renderer.create(
    <GlobalFooter />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
