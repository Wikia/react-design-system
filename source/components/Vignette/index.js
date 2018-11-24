// @flow
import * as React from 'react';

import { getVignetteParams, getUuid } from './helper';

type Props = {
    /** Do we want to upscale image if needed? */
    allowUpscaling?: bool,
    /** Alt text */
    alt?: string,
    /** Additional class name */
    className?: string,
    /** Desired image height */
    height?: number,
    /** Either an URL to image or UUID. */
    image: string,
    /** Desired image width */
    method?: 'auto' | 'scale' | 'thumbnail' | 'top-crop',
    /** Desired image mode */
    width?: number,
}

/**
 * Vignette helper for getting scaled/resized images from Static Image Assets service.
 *
 * Works for any URL (non-vignette ones won't be resized) and for UUIDs.
 * The `mode` along with `width`, `height` and '`allowUpscaling` will dictate if
 * the final image will be scaled, resized or cropped.
 */
export default class Vignette extends React.PureComponent<Props> {
    static defaultProps = {
        allowUpscaling: false,
        alt: '',
        className: '',
        height: null,
        method: 'auto',
        width: null,
    }

    render() {
        const {
            allowUpscaling,
            alt,
            className,
            height,
            image,
            method,
            width,
            ...rest
        } = this.props;

        let imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

        if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
            const uuid = getUuid(imageUrlOrUuid);

            if (uuid) {
                const params = getVignetteParams({
                    width, height, method, allowUpscaling,
                });
                imageUrlOrUuid = `https://vignette.wikia.nocookie.net/${uuid}${params}`;
            }
        }

        return <img className={className} src={imageUrlOrUuid} alt={alt} {...rest} />;
    }
}
