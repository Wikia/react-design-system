import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Avatar = (props) => {
  if (props.link) {
    return (
      <a className={`avatar ${props.className}`} href={props.link}>
        <img src={props.src} alt={props.alt} />
      </a>
    );
  }

  return (
    <div className={`avatar ${props.className}`}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Additional classname to append to classlist
   */
  className: PropTypes.string,
  /**
   * source of an image file for the avatar image
   */
  src: PropTypes.string,
  /**
   * Alt text filled in the source image
   */
  alt: PropTypes.string,
  /**
   * If provided will be wrapped in anchor tag
   */
  link: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  link: '',
  alt: 'avatar',
  src: 'https://vignette.wikia-dev.us/messaging/images/1/19/Avatar.jpg/revision/latest/scale-to-width-down/50',
};

export default Avatar;
