import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Link from './components/Link';
import Search from './components/Search';
import User from './components/User';
import UserAnon from './components/UserAnon';

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
    this.props.api().then(
      (response) => {
        this.setState({navigationData: response.data});
      }
    );
  }

  onSearchStateChange(searchIsFocused) {
    this.setState({searchIsFocused});
  }

  renderLeft() {
    const logo = get(this.state.navigationData, 'logo');
    const navLinks = get(this.state.navigationData, 'main_navigation');

    return (
      <div className="wds-global-navigation__content-bar-left">
        <Link link={logo} />
        <nav className="wds-global-navigation__links">
          {navLinks.map(
            link => <Link key={link.tracking_label} link={link} />
          )}
        </nav>
      </div>
    );
  }

  renderRight() {
    const createWiki = get(this.state.navigationData, 'create_wiki');
    const search = get(this.state.navigationData, 'search');
    const anonLinks = get(this.state.navigationData, 'anon');
    const user = get(this.state.navigationData, 'user');

    return (
      <div className="wds-global-navigation__content-bar-right">
        <Search onStateChange={this.onSearchStateChange} {...search} />
        <UserAnon anonLinks={anonLinks} />
        <User user={user} />
        <div className="wds-global-navigation__start-a-wiki">
          <Link link={createWiki} />
        </div>
      </div>
    );
  }

  render() {
    if (this.state.navigationData === null) {
      // loading
      return null;
    }

    const partnerSlot = get(this.state.navigationData, 'partner_slot');

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

GlobalNavigation.propTypes = {
  className: PropTypes.string,
  api: PropTypes.func.isRequired,
};

GlobalNavigation.defaultProps = {
  className: '',
};

export default GlobalNavigation;
