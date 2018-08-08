import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Avatar = (props) => {
  const style = props.borderColor ? {borderColor: props.borderColor} : {};
  const contents = props.children ? props.children : <img src={props.src} alt={props.alt} />;

  if (props.link) {
    return (
      <a className={`avatar ${props.className}`} href={props.link} style={style}>
        {contents}
      </a>
    );
  }

  return (
    <div className={`avatar ${props.className}`} style={style}>
      {contents}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Single child image element
   */
  children: PropTypes.node,
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
  /**
   * If provided will inline an alt border color
   */
  borderColor: PropTypes.string,
};

Avatar.defaultProps = {
  children: false,
  className: '',
  link: '',
  alt: 'avatar',
  src: 'https://vignette.wikia-dev.us/messaging/images/1/19/Avatar.jpg/revision/latest/scale-to-width-down/50',
  borderColor: '',
};

export default Avatar;
