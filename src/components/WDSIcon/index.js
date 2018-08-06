import React from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';

const styles = theme => ({
  root: {
    fill: ({fill}) => fill,
    height: ({size}) => size * theme.spacing.unit,
    minWidth: ({size}) => size * theme.spacing.unit,
    width: ({size}) => size * theme.spacing.unit,
  },
});

const WDSIcon = ({classes, icon, className}) => (
  <svg className={`${classes.root} ${className}`}>
    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#wds-icons-${icon}`} />
  </svg>
);

WDSIcon.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,
  /**
   * Multiple of `theme.spacing.unit`
   */
  size: PropTypes.number,
  /**
   * String name of wds icon.
   * @see See [fandomdesignsystem](https://fandomdesignsystem.com/#/components/assets) for complete list
   */
  icon: PropTypes.string.isRequired,
  /**
   * Color to fill svg in
   *
   */
  fill: PropTypes.string,
};

WDSIcon.defaultProps = {
  children: null,
  className: '',
  size: 2,
  fill: 'purple',
};

export default injectStyles(styles)(WDSIcon);
