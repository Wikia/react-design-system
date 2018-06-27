import PropTypes from 'prop-types';

const linkType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // optional fields
  caption: PropTypes.string,
  edition: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()),
  tracking_label: PropTypes.string,
});

export default linkType;
