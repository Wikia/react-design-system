import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({href, edition}) => (
  <a
    href={href}
    className="wds-global-navigation__logo"
    data-tracking-label="logo"
  >
    <svg className="wds-global-navigation__logo-image wds-is-wds-company-logo-fandom-white">
      <use xlinkHref="#wds-company-logo-fandom-white" />
    </svg>
    {edition && (
      <span className="wds-global-navigation__edition-text">{edition}</span>
    )}
  </a>
);

Logo.propTypes = {
  edition: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  edition: null,
};

export default Logo;
