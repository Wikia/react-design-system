import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import './styles.scss';

function renderLink(key, {label, href, tracking_label}) { // eslint-disable-line camelcase
  return (
    <a
      className="wds-global-navigation__link"
      key={key}
      href={href}
      data-tracking-label={tracking_label} // eslint-disable-line camelcase
    >
      {label}
    </a>
  );
}


/*
API REQUEST:
- edition: String|null
- language: String
- address (from referrer)
 */

const apiResponse = {
  logo: {
    href: 'http://fandom.wikia.com/',
    tracking_label: 'logo',
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
    label: 'Create a wiki',
    href: 'http://fandom.wikia.com/',
    tracking_label: 'start-a-wiki',
  },
  main_navigation: [
    {
      label: 'Games',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.games',
    },
    {
      label: 'Movies',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.movies',
    },
    {
      label: 'TV',
      href: 'http://fandom.wikia.com/topic/games',
      tracking_label: 'link.tv',
    },
    {
      label: 'Video',
      href: 'http://fandom.wikia.com/video',
      tracking_label: 'link.video',
    },
  ],
  main_navigation_dropdown: {
    label: 'Wikis',
    items: [
      {
        label: 'Explore',
        href: 'http://fandom.wikia.com/explore',
        tracking_label: 'link.explore',
      },
      {
        label: 'Community',
        href: 'http://de.community.sandbox-content.wikia.com/wiki/Community_Deutschland',
        tracking_label: 'link.community-central',
      },
      {
        label: 'Fandom University',
        href: 'http://fandom.wikia.com/wiki/Fandom_University',
        tracking_label: 'link.fandom-university',
      },
    ],
  },
  __user: {
    avatar: null,
    username: 'User name',
    tracking_label: 'account',
    items: [
      {
        label: 'View wiki profile',
        href: 'http://community.wikia.com/wiki/User:User_name',
        tracking_label: 'account.profile',
      },
      {
        label: 'View author profile',
        href: 'http://fandom.wikia.com/u/User_name',
        tracking_label: 'account.profile',
      },
      {
        label: 'Sign-out',
        href: 'https://www.sandbox-content.wikia.com/signout?redirect=<referrer>',
        tracking_label: 'account.sign-out',
      },
    ],
  },
  anon: [
    {
      href: 'https://www.sandbox-content.wikia.com/signin?redirect=<referrer>',
      label: 'Sign-in',
      tracking_label: 'account.sign-in',
    },
    {
      href: 'https://www.sandbox-content.wikia.com/register?redirect=<referrer>',
      label: 'Register',
      tracking_label: 'account.register',
      secondary: true,
      caption: 'Don\'t have an account?',
    },
  ],
  partner_slot: {
    href: 'http://www.entertainweb.de/',
    image: 'https://services.wikia.com/static-assets/image/5588e692-fae8-4dc3-8db6-5f62e37fed47',
    label: 'entertainweb',
    tracking_label: 'entertainweb',
  },
};

class GlobalNavigation extends React.Component {
  state = {
    navigationData: null,
  };

  componentDidMount() {
    this._apiRequest = null;
    setTimeout(() => this.setState({navigationData: apiResponse}), 2000);
    // this._apiRequest = this.props.api().then(
    //   (response) => {
    //     this._apiRequest = null;
    //     this.setState({navigationData: response});
    //   }
    // );
  }

  componentWillUnmount() {
    if (this._apiRequest) {
      this._apiRequest.cancel();
    }
  }

  getPartnerSlot() {
    return get(this.state.navigationData, 'partner_slot');
  }

  renderPartnerSlot() {
    const slot = this.getPartnerSlot();

    if (!slot) {
      return null;
    }

    return (
      <div className="wds-global-navigation__partner-slot">
        <a
          className="wds-global-navigation__partner-slot-link"
          href={slot.href}
          data-tracking-label={slot.tracking_label}
        >
          <img
            className="wds-global-navigation__partner-slot-image"
            src={slot.image}
            alt={slot.label}
          />
        </a>
      </div>
    );
  }

  renderLogo() {
    const logo = get(this.state.navigationData, 'logo');

    return (
      <a
        href={logo.href}
        className="wds-global-navigation__logo"
        data-tracking-label={logo.tracking_label}
      >
        <svg className="wds-global-navigation__logo-image wds-is-wds-company-logo-fandom-white">
          <use xlinkHref="#wds-company-logo-fandom-white" />
        </svg>
      </a>
    );
  }

  renderNavDropdown() {
    const dropdown = get(this.state.navigationData, 'main_navigation_dropdown');
    const createWiki = get(this.state.navigationData, 'create_wiki');

    return (
      <div className="wds-global-navigation__link-group wds-has-shadow wds-dropdown">
        <div className="wds-global-navigation__dropdown-toggle wds-global-navigation__link wds-dropdown__toggle">
          <span>{dropdown.label}</span>
          <svg className="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron">
            <use xlinkHref="#wds-icons-dropdown-tiny" />
          </svg>
        </div>
        <div className="wds-global-navigation__dropdown-content wds-dropdown__content">
          <ul className="wds-list wds-is-linked">
            {dropdown.items.map(item => (
              <li key={item.tracking_label}>
                <a
                  href={item.href}
                  data-tracking-label={item.tracking_label}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              {this.renderCreateWiki()}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderNavLinks() {
    const navLinks = get(this.state.navigationData, 'main_navigation');

    return (
      <nav className="wds-global-navigation__links">
        {navLinks.map(link => renderLink(link.tracking_label, link))}
        {this.renderNavDropdown()}
      </nav>
    );
  }

  renderLeft() {
    return (
      <div className="wds-global-navigation__content-bar-left">
        {this.renderLogo()}
        {this.renderNavLinks()}
      </div>
    );
  }
  renderCreateWiki() {
    const createWiki = get(this.state.navigationData, 'create_wiki');

    return (
      <a
        className="wds-global-navigation__link-button wds-button wds-is-secondary"
        href={createWiki.href}
        data-tracking-label={createWiki.tracking_label}
      >
        {createWiki.label}
      </a>
    );
  }

  renderSearch() {
    const search = get(this.state.navigationData, 'search');

    return (
      <form
        action={search.url}
        className="wds-global-navigation__search-container"
      >
        <div className="wds-global-navigation__search wds-dropdown">
          <div className="wds-global-navigation__search-toggle">
            <svg className="wds-global-navigation__search-toggle-icon wds-icon wds-icon-small">
              <use xlinkHref="#wds-icons-magnifying-glass-small" />
            </svg>
            <span className="wds-global-navigation__search-toggle-text">
              {search.label}
            </span>
          </div>
          <div className="wds-global-navigation__search-input-wrapper wds-dropdown__toggle">
            <input
              name={search.param}
              autoComplete="off"
              placeholder={search.placeholder_inactive}
              className="wds-global-navigation__search-input ember-text-field"
              type="search"
            />
            <button className="wds-global-navigation__search-close wds-button wds-is-text" type="button">
              <svg className="wds-icon wds-icon-tiny wds-global-navigation__search-close-icon">
                <use xlinkHref="#wds-icons-cross" />
              </svg>
            </button>
            <button
              data-tracking-label={search.tracking_label}
              disabled
              className="wds-global-navigation__search-submit wds-button"
            >
              <svg className="wds-global-navigation__search-submit-icon wds-icon wds-icon-small">
                <use xlinkHref="#wds-icons-arrow-small" />
              </svg>
            </button>
          </div>
          <div className="wds-global-navigation__search-suggestions wds-dropdown__content">
            <ul className="wds-list wds-is-linked wds-has-ellipsis" />
          </div>
        </div>
      </form>
    );
  }

  renderAnon() {
    const anon = get(this.state.navigationData, 'anon');

    if (!anon) {
      return null;
    }

    return (
      <div className="wds-global-navigation__user-menu wds-has-shadow wds-dropdown">
        <div className="wds-dropdown__toggle">
          <div className="wds-avatar">
            <div className="wds-avatar__inner-border" />
            <svg className="wds-avatar__image">
              <use xlinkHref="#wds-avatar-icon-user" />
            </svg>
          </div>
          <svg className="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron">
            <use xlinkHref="#wds-icons-dropdown-tiny" />
          </svg>
        </div>
        <div className="wds-global-navigation__dropdown-content wds-is-right-aligned wds-dropdown__content">
          <ul className="wds-list wds-has-lines-between">
            {anon.map(item => (
              <li key={item.tracking_label}>
                {item.caption && (
                  <div className="wds-global-navigation__user-menu-dropdown-caption">
                    {item.caption}
                  </div>
                )}
                <a
                  data-tracking-label={item.tracking_label}
                  href={item.href}
                  className={`wds-is-full-width wds-button ${item.secondary && 'wds-is-secondary'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  renderRight() {
    const createWiki = get(this.state.navigationData, 'create_wiki');

    return (
      <div className="wds-global-navigation__content-bar-right">
        {this.renderSearch()}
        {this.renderAnon()}
        <div className="wds-global-navigation__start-a-wiki">
          {this.renderCreateWiki()}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.navigationData === null) {
      // loading
      return null;
    }

    // loaded
    const classes = [
      'wds-global-navigation',
      'wds-search-is-always-visible',
      this.getPartnerSlot() ? 'wds-has-partner-slot' : null,
      this.props.className,
    ].filter(c => c).join(' ');

    return (
      <div className={classes}>
        <div className="wds-global-navigation__content-container">
          {this.renderLeft()}
          {this.renderRight()}
          {this.renderPartnerSlot()}
        </div>
      </div>
    );
  }
}

GlobalNavigation.propTypes = {
  className: PropTypes.string,
  api: PropTypes.func.isRequired,
};

GlobalNavigation.defaultProps = {
  className: '',
};

export default GlobalNavigation;
