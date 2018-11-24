// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
};

/**
 * ContentWell wraps `children` in `wds-content-well` CSS mixin.
 */
export default class ContentWell extends React.PureComponent<Props> {
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
            <div className={`wds-content-well ${className}`} {...rest}>
                {children}
            </div>
        );
    }
}
