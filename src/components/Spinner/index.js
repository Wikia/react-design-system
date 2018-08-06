import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    display: 'inline-flex',
    width: props => props.size,
    height: props => props.size,
  },
  svg: {
    animation: 'fandom-spinner-rotator .5s linear infinite',
    transform: 'translateZ(0)',
  },
  circle: {
    '-webkit-backface-visibility': 'hidden',
    'backface-visbility': 'hidden',
    animation: 'fandom-spinner-dash 1.25s linear infinite alternate-reverse',
    stroke: theme.colors.link,
  },
  '@keyframes fandom-spinner-rotator': {
    from: `transform: rotate(0)`,
    to: 'transform: rotate(360deg)',
  },
  '@keyframes fandom-spinner-dash': {
    to: `stroke-dashoffset: 0`,
  },
});

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */
const Spinner = ({
  className,
  size,
  stroke,
  classes,
}) => {
  const style = {
    width: size,
    height: size,
  };

  const r = (size - stroke) / 2;
  const translate = r + (stroke / 2);
  const dash = 2 * Math.PI * r;

  return (
    <div className={classes.root}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
      >
        <g transform={`translate(${translate}, ${translate})`}>
          <circle
            className={classes.circle}
            fill="none"
            strokeWidth={stroke}
            strokeDasharray={dash}
            strokeDashoffset={dash}
            strokeLinecap="round"
            r={r}
          />
        </g>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Loader size
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Stroke width
   */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
};

export default injectSheet(styles)(Spinner);
