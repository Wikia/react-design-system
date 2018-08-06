import React from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';

import WDSIcon from '../WDSIcon';

function getIcon(type) {
  switch (type) {
    case ('alert'):
      return 'error-small';
    case ('warning'):
      return 'alert-small';
    case ('success'):
      return 'circle-small';
    default:
      return 'flag-small';
  }
}

function getBackgroundColor({colors}, type) {
  switch (type) {
    case ('alert'):
      return colors.alert;
    case ('warning'):
      return colors.warning;
    case ('success'):
      return colors.success;
    default:
      return colors.message;
  }
}

const styles = theme => ({
  root: {
    backgroundColor: theme.colors.background,
    color: theme.colors.bodyText,
    display: 'flex',
    transition: 'opacity 0.4s',
  },
  icon: {
    alignItems: 'center',
    color: theme.colors.background,
    display: 'flex',
    justifyContent: 'center',
    width: '48px',
    backgroundColor: props => getBackgroundColor(theme, props.type),
  },
  text: {
    color: theme.colors.bodyText,
    flex: 1,
    fontSize: theme.typography.minus2,
    lineHeight: theme.typography.lineHeight.minus2,
    padding: {
      top: 13,
      bottom: 13,
      left: 12,
      right: 12,
    },
  },
  close: {
    cursor: 'pointer',
    padding: 18,
    fill: theme.colors.alert,
  },
});

// create icon component

/**
 * This is a single component used in `BannerNotifications` component.
 */
const BannerNotification = ({className, type, text, onClose, classes}) => (
  <div className={classes.root}>
    <div className={classes.icon}>
      <WDSIcon icon={getIcon(type)} fill="white"/>
    </div>
    <span className={classes.text}>{text}</span>
    {onClose && (
      <WDSIcon className={classes.close} size={2} icon="cross-tiny" fill="red" onClick={onClose} />
    )}
  </div>
);

BannerNotification.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

BannerNotification.defaultProps = {
  className: '',
  onClose: null,
};

export default injectStyles(styles)(BannerNotification);
