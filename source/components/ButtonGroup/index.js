// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
};

/**
 * Button group component
 */
export default class ButtonGroup extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
    }

    render() {
        const {
            className,
            children,
            ...rest
        } = this.props;

        const classes = [
            'wds-button-group',
            className,
        ].filter(c => c).join(' ');

        return <div className={classes} {...rest}>{children}</div>;
    }
}
