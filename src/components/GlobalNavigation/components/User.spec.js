import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import User from './User';

test('User shouldn\'t render with null', () => {
  const component = renderer.create(
    <User user={null} />
  );
  expect(component.toJSON()).toBe(null);
});

test('User should render correctly with data', () => {
  const user = {
    avatar: 'https://static.wikia.nocookie.net/2536a38e-ab79-4d85-a5a0-16428e2582e8/scale-to-width-down/50',
    username: 'User name',
    tracking_label: 'account',
    items: [
      {
        type: 'link-text',
        title: 'View wiki profile',
        href: 'http://community.wikia.com/wiki/User:User_name',
        tracking_label: 'account.profile-wiki',
      },
      {
        type: 'link-text',
        title: 'View author profile',
        href: 'http://fandom.wikia.com/u/User_name',
        tracking_label: 'account.profile',
      },
      {
        type: 'link-logout',
        title: 'Sign-out',
        href: 'https://www.sandbox-content.wikia.com/signout?redirect=<referrer>',
        tracking_label: 'account.sign-out',
      },
    ],
  };
  const component = renderer.create(
    <User user={user} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
