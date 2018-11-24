// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
    /**
     * href attribute.
     * FloatingButton uses `<a>` tag if it's present.
     */
    href?: string | false,
    /** Disabled attribute for the `<button>` */
    disabled?: bool,
    /** Callback for the `<button>` */
    onClick?: Function,
};

/**
 * Floating button (icons-only)
 */
export default class FloatingButton extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        href: false,
        disabled: false,
        onClick: () => {},
    }

    render() {
        const {
            className,
            children,
            href,
            ...rest
        } = this.props;

        const classes = [
            'wds-floating-button',
            className,
        ].filter(c => c).join(' ');

        if (href) {
            return <a href={href} className={classes} {...rest}>{children}</a>;
        }

        return <button className={classes} {...rest}>{children}</button>;
    }
}
