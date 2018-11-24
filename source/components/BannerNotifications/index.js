// @flow
import * as React from 'react';

// eslint-disable-next-line no-restricted-imports
import BannerNotification from '../BannerNotification';

export type BannerNotificationMessageType = {
    id: string,
    permanent?: bool,
    text?: string,
    children?: React.Node,
    type: 'alert' | 'warning' | 'success' | 'message',
};

type Props = {
    /** An additional class name */
    className?: string,
    messages: Array<BannerNotificationMessageType>,
    /** Action invoked when close button is clicked */
    onClose: Function,
};

/**
 * Component used to create notifications. For full functionality it needs some
 * app logic to handle the array of messages - adding/removing.
 *
 * See the following:
 * - https://github.com/Wikia/f2/blob/master/frontend/react-app/curationTools/containers/Notifications.jsx
 * - https://github.com/Wikia/f2/tree/master/frontend/react-app/curationTools/reducers/notifications
 *
 * The `messages` prop is an array of `BannerNotificationMessageType` objects with the following props:
 * - `id`: unique string that's send as the param of the `onClose` function
 * - `type`: one of: `'alert'`, `'warning'`, `'success'` or `'message'`.
 * - `text`: text that is going to be displayed on the notification
 * - `children`: alternatively you can provide a child component(s)
 * - `permanent`: a boolean flag - if present the close button won't be displayed on the notification
 *
 * `BannerNotificationMessageType` is exported along with `BannerNotification`
 */
export default class BannerNotifications extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
    }

    onClose = (id: any): void => {
        const { onClose } = this.props;

        onClose(id);
    }

    renderNotification({
        text, type, id, permanent,
    }: {
        text: string, type: string, id: string, permanent: bool
    }) {
        const props = {
            key: id,
            type,
            text,
        };

        if (permanent) {
            return <BannerNotification {...props} />;
        }
        return <BannerNotification {...props} onClose={() => this.onClose(id)} />;
    }

    render() {
        const { className, messages } = this.props;

        if (messages.length === 0) {
            return null;
        }

        return (
            <div className={`wds-banner-notification__container ${className}`}>
                {messages.map(message => this.renderNotification(message))}
            </div>
        );
    }
}
