import React from 'react';
import PropTypes from 'prop-types';

import IconCrossTiny from '../../icons/IconCrossTiny';
import IconErrorSmall from '../../icons/IconErrorSmall';
import IconAlertSmall from '../../icons/IconAlertSmall';
import IconCheckmarkCircleSmall from '../../icons/IconCheckmarkCircleSmall';
import IconFlagSmall from '../../icons/IconFlagSmall';

import './styles.scss';

function getIcon(type) {
    switch (type) {
        case ('alert'):
            return <IconErrorSmall className="wds-banner-notification__icon-mark" />;
        case ('warning'):
            return <IconAlertSmall className="wds-banner-notification__icon-mark" />;
        case ('success'):
            return <IconCheckmarkCircleSmall className="wds-banner-notification__icon-mark" />;
        default:
            return <IconFlagSmall className="wds-banner-notification__icon-mark" />;
    }
}

function getClassName(type) {
    switch (type) {
        case ('alert'):
            return 'wds-alert';
        case ('warning'):
            return 'wds-warning';
        case ('success'):
            return 'wds-success';
        default:
            return 'wds-message';
    }
}

/**
 * This is a single component used in `BannerNotifications` component.
 */
const BannerNotification = ({
    className, type, text, onClose, children,
}) => (
    <div className={`wds-banner-notification ${getClassName(type)} ${className}`}>
        <div className="wds-banner-notification__icon">{getIcon(type)}</div>
        <span className="wds-banner-notification__text">{children || text}</span>
        <IconCrossTiny className="wds-banner-notification__close" onClick={onClose} />
    </div>
);

BannerNotification.propTypes = {
    /** Children to display */
    children: PropTypes.node,
    /** An additional class name */
    className: PropTypes.string,
    onClose: PropTypes.func,
    /** Text to display if there are no children. */
    text: PropTypes.string,
    type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
};

BannerNotification.defaultProps = {
    children: null,
    className: '',
    onClose: null,
    text: '',
};

export default BannerNotification;
