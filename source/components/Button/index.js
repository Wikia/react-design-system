// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
    /**
     * href attribute.
     * Button uses `<a>` tag if it's present.
     */
    href?: string | false,
    /** Disabled attribute for the `<button>` */
    disabled?: bool,
    /** Callback for the `<button>` */
    onClick?: Function,
    /** Full width flag */
    fullwidth?: bool,
    /** Full width flag */
    secondary?: bool,
    /** Square flag */
    square?: bool,
    /** Text flag */
    text?: bool,
};

/**
 * Basic button component
 */
export default class Button extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        disabled: false,
        fullwidth: false,
        href: false,
        secondary: false,
        square: false,
        text: false,
        onClick: () => {},
    }

    render() {
        const {
            className,
            href,
            text,
            secondary,
            square,
            fullwidth,
            children,
            ...rest
        } = this.props;

        const classes = [
            'wds-button',
            className,
            secondary ? 'wds-is-secondary' : '',
            square ? 'wds-is-square' : '',
            text ? 'wds-is-text' : '',
            fullwidth ? 'wds-is-fullwidth' : '',
        ].filter(c => c).join(' ');

        if (href) {
            return <a href={href} className={classes} {...rest}>{children}</a>;
        }

        return <button className={classes} {...rest}>{children}</button>;
    }
}
