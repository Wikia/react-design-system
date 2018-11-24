// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
    /** Vertical flag fro the group */
    vertical?: bool,
};

/**
 * Floating button group
 */
export default class FloatingButtonGroup extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        vertical: false,
    }

    render() {
        const {
            className,
            children,
            vertical,
            ...rest
        } = this.props;

        const classes = [
            'wds-floating-button-group',
            vertical ? 'wds-is-vertical' : '',
            className,
        ].filter(c => c).join(' ');

        return <div className={classes} {...rest}>{children}</div>;
    }
}
