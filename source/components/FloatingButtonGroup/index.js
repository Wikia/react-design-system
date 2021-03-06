import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Floating button group
 */
const FloatingButtonGroup = ({
    className,
    vertical,
    children,
    ...rest
}) => {
    const classes = [
        'wds-floating-button-group',
        vertical ? 'wds-is-vertical' : '',
        className,
    ].filter(c => c).join(' ');

    return <div className={classes} {...rest}>{children}</div>;
};

FloatingButtonGroup.propTypes = {
    /** @ignore */
    children: PropTypes.node,
    /** Additional class name */
    className: PropTypes.string,
    /** Vertical flag for the group */
    vertical: PropTypes.bool,
};

FloatingButtonGroup.defaultProps = {
    children: null,
    vertical: false,
    className: '',
};

export default FloatingButtonGroup;
