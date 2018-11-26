// @flow
import * as React from 'react';

import './styles.scss';

type Props = {
    /** Additional class name */
    className?: string,
    name: string,
    /** Display content inline based on line height */
    inline?: bool,
    /** Display block and center */
    block?: bool,
    /** Spinner size */
    size?: string | number,
    /** Stroke width */
    stroke?: string | number,
};

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */
export default class Spinner extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        size: 30,
        stroke: 2,
        block: false,
        inline: false,
    }

    render() {
        const {
            className,
            size,
            stroke,
            block,
            inline,
            ...rest
        } = this.props;

        const style = {
            width: size,
            height: size,
        };

        const r = (size - stroke) / 2;
        const translate = r + (stroke / 2);
        const dash = 2 * Math.PI * r;

        const classes = ['fandom-spinner'];
        if (block) {
            classes.push('is-block');
        }

        if (inline) {
            classes.push('is-inline');
        }

        if (className) {
            classes.push(className);
        }

        return (
            <div className={classes.join(' ')} style={style} {...rest}>
                <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g transform={`translate(${translate}, ${translate})`}>
                        <circle
                            fill="none"
                            strokeWidth={stroke}
                            strokeDasharray={dash}
                            strokeDashoffset={dash}
                            strokeLinecap="round"
                            r={r}
                        />
                    </g>
                </svg>
            </div>
        );
    }
}
