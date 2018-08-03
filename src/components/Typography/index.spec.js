import React from 'react';
import renderer from 'react-test-renderer';

import Typography from './index';

/* eslint-disable no-alert */

test('Typography renders correctly with default values', () => {
  const component = renderer.create(
    <Typography> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with headline', () => {
  const component = renderer.create(
    <Typography variant="headline"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with title', () => {
  const component = renderer.create(
    <Typography variant="title"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with subtitle', () => {
  const component = renderer.create(
    <Typography variant="subtitle"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with display1', () => {
  const component = renderer.create(
    <Typography variant="display1"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with display2', () => {
  const component = renderer.create(
    <Typography variant="display2"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with display3', () => {
  const component = renderer.create(
    <Typography variant="display3"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with display4', () => {
  const component = renderer.create(
    <Typography variant="display4"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with body', () => {
  const component = renderer.create(
    <Typography variant="body"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Typography renders correctly with aside', () => {
  const component = renderer.create(
    <Typography variant="aside"> Hello World </Typography>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
