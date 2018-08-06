import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import './styles.scss';

const styles = theme => ({
  root: {
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    color: theme.colors.primaryText,
    borderWidth: 1,
    borderRadius: theme.shape.borderRadius,
    boxSizing: 'content-box',
    fontSize: theme.typography.minus2,
    fontWeight: theme.typography.weight.strong,
    margin: 0,
    padding: {
      top: theme.spacing.unit,
      bottom: theme.spacing.unit,
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    transitionDuration: theme.transition.duration,
    transitionProperty: 'background-color, border-color, color',
    textTransform: 'uppercase',
    '-webkit-appearance': 'none',
  },
});

/**
 * Basic button component
 */
const Button = ({
  className,
  href,
  text,
  secondary,
  square,
  fullwidth,
  children,
  classes,
  ...rest
}) => {
  // const classes = [
  //   'wds-button',
  //   className,
  //   secondary ? 'wds-is-secondary' : '',
  //   square ? 'wds-is-square' : '',
  //   text ? 'wds-is-text' : '',
  //   fullwidth ? 'wds-is-fullwidth' : '',
  // ].filter(c => c).join(' ');

  if (href) {
    return <a href={href} className={classes.root} {...rest}>{children}</a>;
  }

  return <button className={classes.root} {...rest}>{children}</button>;
};

Button.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * href attribute.
   * Button uses `<a>` tag if it's present.
   */
  href: PropTypes.string,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: PropTypes.bool,
  /**
   * Secondary flag
   */
  secondary: PropTypes.bool,
  /**
   * Square flag
   */
  square: PropTypes.bool,
  /**
   * Text flag
   */
  text: PropTypes.bool,
  /**
   * Full width flag
   */
  fullwidth: PropTypes.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullwidth: false,
  href: null,
  secondary: false,
  square: false,
  text: false,
  onClick: () => {},
};

export default injectSheet(styles)(Button);
