import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import linkType from '../linkType';

const User = ({user}) => {
  if (!user) {
    return null;
  }

  return (
    <div className="wds-global-navigation__user-menu wds-has-shadow wds-dropdown">
      <div className="wds-dropdown__toggle">
        <div className="wds-avatar">
          <img
            src={user.avatar}
            alt={user.username}
            title={user.username}
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
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tracking_label: PropTypes.string,
    items: PropTypes.arrayOf(linkType),
  }),
};

User.defaultProps = {
  user: null,
};

export default User;
