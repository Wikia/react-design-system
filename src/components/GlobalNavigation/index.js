import React from 'react';
import PropTypes from 'prop-types';

import GlobalNavigationDesktop from './components/GlobalNavigationDesktop';

class GlobalNavigation extends React.Component {
  state = {
    navigationData: null,
  };

  componentDidMount() {
    this.props.api().then(
      (response) => {
        this.setState({navigationData: response.data});
      }
    );
  }

  render() {
    if (this.state.navigationData === null) {
      // loading
      return null;
    }

    return (
      <GlobalNavigationDesktop
        className={this.props.className}
        navigationData={this.state.navigationData}
      />
    );
  }
}

GlobalNavigation.propTypes = {
  /**
   * Additional class name for the component
   */
  className: PropTypes.string,
  /**
   * A function returning an AXION promise
   */
  api: PropTypes.func.isRequired,
};

GlobalNavigation.defaultProps = {
  className: '',
};

export default GlobalNavigation;
