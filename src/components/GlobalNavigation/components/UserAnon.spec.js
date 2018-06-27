import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import UserAnon from './UserAnon';

test('UserAnon shouldn\'t render with null', () => {
  const component = renderer.create(
    <UserAnon user={null} />
  );
  expect(component.toJSON()).toBe(null);
});

test('UserAnon should render correctly with data', () => {
  const anonLinks = [
    {
      type: 'link-full-button',
      href: 'https://www.sandbox-content.wikia.com/signin?redirect=<referrer>',
      title: 'Sign-in',
      tracking_label: 'account.sign-in',
    },
    {
      type: 'link-full-button-secondary',
      href: 'https://www.sandbox-content.wikia.com/register?redirect=<referrer>',
      title: 'Register',
      tracking_label: 'account.register',
      caption: 'Don\'t have an account?',
    },
  ];
  const component = renderer.create(
    <UserAnon anonLinks={anonLinks} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
