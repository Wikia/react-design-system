import { lighten } from 'polished';

export const colors = {
    AQUA: '#00d6d6',
    AQUA_HOVER: lighten(0.3, '#00d6d6'),
};

export const theme = {
    button: {
        background: `var(--button-background, ${colors.AQUA})`,
        backgroundHover: `var(--button-background-hover, ${colors.AQUA_HOVER})`,
    },
};

export default theme;
