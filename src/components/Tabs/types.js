import PropTypes from 'prop-types';

export const linkTabType = PropTypes.shape({
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  isCurrent: PropTypes.bool,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
});

export const clickableTabType = PropTypes.shape({
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  isCurrent: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
});

export const tabsType = PropTypes.oneOfType([
  linkTabType,
  clickableTabType,
]);
