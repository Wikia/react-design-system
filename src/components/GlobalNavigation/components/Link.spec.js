import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Link from './Link';

const emptyLink = {
  type: '',
  title: 'title',
  tracking_label: 'tracking_label',
};

/* eslint-disable no-alert */

test('Link should\'t render empty', () => {
  const component = renderer.create(
    <Link link={null} />
  );
  expect(component.toJSON()).toBe(null);
});

test('Link should\'t render unknown type', () => {
  // mock console.error
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  const unknownLink = {...emptyLink, type: '?'};
  const component = renderer.create(
    <Link link={unknownLink} />
  );
  expect(component.toJSON()).toBe(null);
  // check console.error
  expect(console.error).toHaveBeenCalled(); // eslint-disable-line no-console
  expect(consoleSpy.mock.calls[0][0]).toContain('Unknown Link type:');

  // restore global console
  consoleSpy.mockRestore();
});

test('Link should render type link-nav', () => {
  const link = {
    ...emptyLink,
    type: 'link-nav',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-text', () => {
  const link = {
    ...emptyLink,
    type: 'link-text',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-button', () => {
  const link = {
    ...emptyLink,
    type: 'link-button',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-group', () => {
  const link = {
    ...emptyLink,
    type: 'link-group',
    title: 'group',
    items: [
      {...emptyLink, type: 'link-text', href: 'http://example.com', tracking_label: '1'},
      {...emptyLink, type: 'link-button', href: 'http://example.com', tracking_label: '2'},
    ],
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-partner-slot', () => {
  const link = {
    ...emptyLink,
    type: 'link-partner-slot',
    href: 'http://partner.com',
    image: 'http://partner.com/image.jpg',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-logo without edition', () => {
  const link = {
    ...emptyLink,
    type: 'link-logo',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-logo with edition', () => {
  const link = {
    ...emptyLink,
    type: 'link-logo',
    href: 'http://example.com',
    edition: 'UK',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-logout', () => {
  const link = {
    ...emptyLink,
    type: 'link-logout',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-full-button', () => {
  const link = {
    ...emptyLink,
    type: 'link-full-button',
    href: 'http://example.com',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Link should render type link-full-button-secondary with caption', () => {
  const link = {
    ...emptyLink,
    type: 'link-full-button-secondary',
    href: 'http://example.com',
    caption: 'A caption',
  };
  const component = renderer.create(
    <Link link={link} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
