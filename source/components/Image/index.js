import React from 'react';
import PropTypes from 'prop-types';
// import Vignette from 'vignette';

/**
 * Create a super low resolution image that will automatically be blurred in most browsers
 *
 * @param vignetteUrl
 * @returns {String}
 */
function getLowRes(vignetteUrl) {
    return vignetteUrl;
    // return Vignette.getThumbURL(vignetteUrl, {
    //     mode: 'scale-to-width-down',
    //     width: 5,
    //     height: 5,
    // });
}

class Image extends React.Component {
    constructor(props) {
        super(props);
        const { src } = props;
        this.onLoad = this.onLoad.bind(this);
        this.state = {
            src,
            loading: true,
            limbo: false,
        };
    }

    // When the src changes first replace the src with a temp image so it doesn't stall displaying
    // the old image
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    static getDerivedStateFromProps(props, state) {
        // when only the src changes we are in "limbo" mode
        if (props.src !== state.src) {
            return {
                // try go get low resolution image of new image first
                limbo: true,
                loading: true,
            };
        }

        return {
            limbo: false,
            loading: state.loading,
        };
    }

    // after the component updates once we want to
    componentDidUpdate() {
        const { src: propsSrc } = this.props;
        const { src: stateSrc } = this.state;

        if (propsSrc !== stateSrc) {
            // this is one of the rare cases to conditionally call setState after a component update
            // this allows the images to be removed from the DOM properly
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(() => ({ src: propsSrc }));
        }
    }

    onLoad() { this.setState(() => ({ loading: false })); }

    render() {
        const {
            className, alt, src, srcSet, disableLazy, ...rest
        } = this.props;

        const { loading, limbo } = this.state;

        if (disableLazy) {
            return <img src={src} alt={alt} className={className} srcSet={srcSet} {...rest} />;
        }

        // Limbo state happens when only the src and/or srcset is changed
        // there is no standard on how to handle the state of the image when the src is changed across browsers
        // lets just remove the entire node from html when in limbo
        return (
            <React.Fragment>
                {!limbo && <img src={getLowRes(src)} alt={alt} className={className} style={{ display: !loading ? 'none' : 'block' }} />}
                {!limbo && <img onLoad={this.onLoad} src={src} alt={alt} className={className} style={{ display: loading ? 'none' : 'block' }} srcSet={srcSet} {...rest} />}

                {/* // support SSR */}
                <noscript>
                    <img src={src} alt={alt} className={className} srcSet={srcSet} {...rest} />
                </noscript>
            </React.Fragment>
        );
    }
}

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    disableLazy: PropTypes.bool,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
};

Image.defaultProps = {
    className: null,
    disableLazy: false,
    srcSet: null,
};

export default Image;
