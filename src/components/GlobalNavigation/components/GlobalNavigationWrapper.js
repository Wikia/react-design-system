import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Logo from './Logo';
import Link from './Link';
import Search from './Search';
import User from './User';
import UserAnon from './UserAnon';

import './GlobalNavigationWrapper.scss';

class GlobalNavigationWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchStateChange = this.onSearchStateChange.bind(this);
  }

  state = {
    searchIsFocused: false,
  };

  onSearchStateChange(searchIsFocused) {
    this.setState({searchIsFocused});
  }

  renderLeft() {
    const logo = get(this.props.navigationData, 'logo');
    const navLinks = get(this.props.navigationData, 'main_navigation');

    const navigationLinks = (
      <nav className="wds-global-navigation__links">
        {navLinks.map(
          // eslint-disable-next-line react/no-array-index-key
          (link, index) => <Link key={`link-${index}`} link={link} />
        )}
      </nav>
    );

    return (
      <div className="wds-global-navigation__content-bar-left">
        <Logo {...logo} />
        {navigationLinks}
      </div>
    );
  }

  renderDropdownControls() {
    const createWiki = get(this.props.navigationData, 'create_wiki');
    const search = get(this.props.navigationData, 'search');
    const anonLinks = get(this.props.navigationData, 'anon');
    const user = get(this.props.navigationData, 'user');

    const startWikiButton = (
      <div className="wds-global-navigation__start-a-wiki">
        <Link link={createWiki} />
      </div>
    );

    return (
      <div className="wds-global-navigation__dropdown-controls">
        <Search onStateChange={this.onSearchStateChange} {...search} />
        <UserAnon anonLinks={anonLinks} />
        <User user={user} />
        {startWikiButton}
      </div>
    );
  }

  renderRight() {
    return (
      <div className="wds-global-navigation__content-bar-right">
        {this.renderDropdownControls()}
      </div>
    );
  }

  render() {
    const partnerSlot = get(this.props.navigationData, 'partner_slot');

    // loaded
    const classes = [
      'wds-global-navigation',
      'wds-search-is-always-visible',
      this.state.searchIsFocused ? 'wds-search-is-active' : null,
      partnerSlot ? 'wds-has-partner-slot' : null,
      this.props.className,
    ].filter(c => c).join(' ');

    return (
      <div className={classes}>
        <div className="wds-global-navigation__content-container">
          {this.renderLeft()}
          {this.renderRight()}
          <Link link={partnerSlot} />
        </div>
      </div>
    );
  }
}

GlobalNavigationWrapper.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  navigationData: PropTypes.object.isRequired,
};

GlobalNavigationWrapper.defaultProps = {
  className: '',
};

export default GlobalNavigationWrapper;
