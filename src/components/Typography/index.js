import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// based on https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Typography/Typography.js

/**
 * Generic Typography component
 */
const Typography = ({
  align,
  className: classNameProp,
  color,
  component: componentProp,
  gutterBottom,
  headlineMapping,
  noWrap,
  paragraph,
  variant,
  ...rest
}) => {
  const className = [
    'react-design-typography',
    variant,
    align,
    classNameProp,
    gutterBottom ? 'gutterBottom' : '',
  ].join(' ');

  const Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
  const hasWrapper = variant === 'title';

  if (hasWrapper) {
    return <div className="react-design-typograph__wrapper"> <Component className={className} {...rest} /> </div>;
  }

  return <Component className={className} {...rest} />;
};

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subtitle',
    'aside',
    'body',
    'caption', // todo
    'button', // todo
  ]),
};

Typography.defaultProps = {
  align: 'inherit',
  children: null,
  className: '',
  classNames: [],
  color: 'default',
  component: null,
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subtitle: 'h3',
    aside: 'aside',
    body: 'p',
  },
  noWrap: false,
  paragraph: false,
  variant: 'body',
};

export default Typography;
