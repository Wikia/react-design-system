import PropTypes from 'prop-types';

const linkType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  tracking_label: PropTypes.string,
});

export default linkType;
