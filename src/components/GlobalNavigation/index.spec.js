import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import GlobalNavigation from './index';

const mockedData = {
  logo: {
    type: 'link-logo',
    title: 'FANDOM',
    href: 'http://fandom.wikia.com/',
    tracking_label: 'logo',
    edition: 'UK',
  },
  search: {
    url: 'http://fandom.wikia.com',
    param: 's',
    label: 'Search',
    placeholder_active: 'Placeholder Active',
    placeholder_inactive: 'Placeholder Inactive',
    tracking_label: 'search',
  },
  create_wiki: {
    type: 'link-button',
    title: 'Create a wiki',
    href: 'http://fandom.wikia.com/',
    tracking_label: 'start-a-wiki',
  },
  main_navigation: [
    {
      type: 'link-nav',
      title: 'Games',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.games',
    },
    {
      type: 'link-nav',
      title: 'Movies',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.movies',
    },
    {
      type: 'link-nav',
      title: 'TV',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.tv',
    },
    {
      type: 'link-nav',
      title: 'Video',
      href: 'http://fandom.wikia.com/video',
      tracking_label: 'link.video',
    },
    {
      type: 'link-group',
      title: 'Wikis',
      items: [
        {
          type: 'link-text',
          title: 'Explore',
          href: 'http://fandom.wikia.com/explore',
          tracking_label: 'link.explore',
        },
        {
          type: 'link-text',
          title: 'Community',
          href: 'http://de.community.sandbox-content.wikia.com/wiki/Community_Deutschland',
          tracking_label: 'link.community-central',
        },
        {
          type: 'link-text',
          title: 'Fandom University',
          href: 'http://fandom.wikia.com/wiki/Fandom_University',
          tracking_label: 'link.fandom-university',
        },
        {
          type: 'link-button',
          title: 'Create a wiki',
          href: 'http://fandom.wikia.com/',
          tracking_label: 'start-a-wiki',
        },
      ],
    },
  ],
};

test('GlobalNavigation should work with axios', () => {
  const mock = new MockAdapter(axios);
  mock.onGet('/data').reply(200, mockedData);

  const api = () => axios.get('/data');

  const wrapper = mount(
    <GlobalNavigation api={api} />
  );
  expect(wrapper).toMatchSnapshot();
});
