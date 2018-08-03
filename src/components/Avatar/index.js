import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Avatar = props => (
  <div className={`avatar ${props.className}`}>
    <img src={props.src} alt="avatar" />
  </div>
);

Avatar.propTypes = {
  /**
   * Additional classname to append to classlist
   */
  className: PropTypes.string,
  /**
   * source of an image file for the avatar image
   */
  src: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  src: 'https://vignette.wikia-dev.us/messaging/images/1/19/Avatar.jpg/revision/latest/scale-to-width-down/50',
};

export default Avatar;
