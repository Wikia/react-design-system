export default {
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
  __user: {
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
  },
  anon: [
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
  ],
  partner_slot: {
    type: 'link-partner-slot',
    href: 'http://www.entertainweb.de/',
    image: 'https://services.wikia.com/static-assets/image/5588e692-fae8-4dc3-8db6-5f62e37fed47',
    title: 'entertainweb',
    tracking_label: 'entertainweb',
  },
};
