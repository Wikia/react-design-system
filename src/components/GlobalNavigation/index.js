import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Link from './Link';
import Search from './Search';
import UserAnon from './UserAnon';

import mockedData from './mockedData';

import './styles.scss';

class GlobalNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchStateChange = this.onSearchStateChange.bind(this);
  }

  state = {
    navigationData: null,
    searchIsFocused: false,
  };

  componentDidMount() {
    this._apiRequest = null;
    setTimeout(() => this.setState({navigationData: mockedData}), 1);
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

  onSearchStateChange(searchIsFocused) {
    this.setState({searchIsFocused});
  }

  getPartnerSlot() {
    return get(this.state.navigationData, 'partner_slot');
  }

  renderPartnerSlot() {
    const slot = this.getPartnerSlot();

    if (!slot) {
      return null;
    }

    return <Link link={slot} />;
  }

  renderLogo() {
    const logo = get(this.state.navigationData, 'logo');

    return <Link link={logo} />;
  }

  renderNavLinks() {
    const navLinks = get(this.state.navigationData, 'main_navigation');

    return (
      <nav className="wds-global-navigation__links">
        {navLinks.map(
          link => <Link key={link.tracking_label} link={link} />
        )}
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

    return <Link link={createWiki} />;
  }

  renderSearch() {
    const search = get(this.state.navigationData, 'search');

    return <Search onStateChange={this.onSearchStateChange} {...search} />;
  }

  renderAnon() {
    const anonLinks = get(this.state.navigationData, 'anon');

    return <UserAnon anonLinks={anonLinks} />;
  }

  renderUser() {
    const user = get(this.state.navigationData, 'user');

    return (
      <div className="wds-global-navigation__user-menu wds-has-shadow wds-dropdown">
        <div className="wds-dropdown__toggle">
          <div className="wds-avatar">
            <img
              src="/design-system/images/FANDOM-Avatar.jpg"
              alt=""
              title="Ryba777"
              className="wds-avatar__image"
            />
          </div>
          <svg className="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron">
            <use xlinkHref="#wds-icons-dropdown-tiny" />
          </svg>
        </div>
        <div className="wds-is-right-aligned wds-dropdown__content">
          <ul className="wds-list wds-is-linked">
            {user.items.map(item => (
              <li key={item.tracking_label}>
                <Link link={item} />
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
        {this.renderUser()}
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
      this.state.searchIsFocused ? 'wds-search-is-active' : null,
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
