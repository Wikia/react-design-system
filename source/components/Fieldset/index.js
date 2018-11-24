// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
};

export default class Fieldset extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
    }

    render() {
        const {
            className,
            children,
            ...rest
        } = this.props;

        return (
            <div className={`wds-fieldset ${className}`} {...rest}>
                {children}
            </div>
        );
    }
}
