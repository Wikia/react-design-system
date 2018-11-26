// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    /** Additional class name */
    className?: string,
    /** Icon name - both `-small` and `-tiny` prefix are also updating class name */
    name: string,
    /** `wds-icon-small` flag for the class name (but not for the icon name) */
    small?: bool,
    /** `wds-icon-tiny` flag for the class name (but not for the icon name) */
    tiny?: bool,
};

/**
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component somewhere in the app.
 */
export default class Icon extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        small: false,
        tiny: false,
    }

    render() {
        const {
            name, className, small, tiny, ...props
        } = this.props;

        const isSmall = small || /-small$/.test(name);
        const isTiny = tiny || /-tiny$/.test(name);

        const classes = [
            'wds-icon',
            className,
            isSmall ? 'wds-icon-small' : '',
            isTiny ? 'wds-icon-tiny' : '',
        ].filter(c => c).join(' ');

        return (
            <svg className={classes} {...props}>
                <use xlinkHref={`#wds-icons-${name}`} />
            </svg>
        );
    }
}
