import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import linkType from '../linkType';

const UserAnon = ({anonLinks}) => {
  if (!anonLinks) {
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
          {anonLinks.map(item => (
            <li key={item.tracking_label}>
              {item.caption && (
                <div className="wds-global-navigation__user-menu-dropdown-caption">
                  {item.caption}
                </div>
              )}
              <Link
                className={`wds-is-full-width wds-button ${item.secondary && 'wds-is-secondary'}`}
                link={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

UserAnon.propTypes = {
  anonLinks: PropTypes.arrayOf(linkType),
};

UserAnon.defaultProps = {
  anonLinks: null,
};

export default UserAnon;
