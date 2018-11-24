// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    children: React.Node,
    /** Additional class name */
    className?: string,
};

/**
 * FandomContentWell wraps `children` in `wds-content-well($use-xxlarge-breakpoint: false)` CSS mixin.
 */
export default class FandomContentWell extends React.PureComponent<Props> {
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
            <div className={`wds-fandom-content-well ${className}`} {...rest}>
                {children}
            </div>
        );
    }
}
