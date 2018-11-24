// @flow
import React from 'react';

// eslint-disable-next-line no-restricted-imports
import Icon from '../Icon';

import './styles.scss';

function getIconName(type: string): string {
    switch (type) {
        case ('alert'):
            return 'error-small';
        case ('warning'):
            return 'alert-small';
        case ('success'):
            return 'checkmark-circle-small';
        default:
            return 'flag-small';
    }
}

function getClassName(type: string): string {
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

type Props = {
    children?: React.Node,
    /** An additional class name */
    className?: string,
    onClose?: Function,
    /** Text to display if there are no children. */
    text?: string,
    type: 'alert' | 'warning' | 'success' | 'message',
};

/**
 * This is a single component used in `BannerNotifications` component.
 */
export default class BannerNotification extends React.PureComponent<Props> {
    static defaultProps = {
        children: null,
        className: '',
        onClose: null,
        text: '',
    }

    render() {
        const {
            className, type, text, onClose, children,
        } = this.props;

        return (
            <div className={`wds-banner-notification ${getClassName(type)} ${className}`}>
                <div className="wds-banner-notification__icon">
                    <Icon name={getIconName(type)} />
                </div>
                <span className="wds-banner-notification__text">{children || text}</span>
                {onClose && <Icon name="cross-tiny" className="wds-banner-notification__close" onClick={onClose} />}
            </div>
        );
    }
}
