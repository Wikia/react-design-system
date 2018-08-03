import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './index';

test('Avatar renders correctly with no props', () => {
  const component = renderer.create(
    <Avatar />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});


test('Avatar renders correctly with extra classsname', () => {
  const component = renderer.create(
    <Avatar className="special-class" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});


test('Avatar renders correctly with extra classsname and source', () => {
  const component = renderer.create(
    <Avatar
      className="special-class"
      src="https://vignette.wikia.nocookie.net/af9f47aa-d4ec-420d-a6b9-6d38644e5644/scale-to-width-down/20"
    />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
