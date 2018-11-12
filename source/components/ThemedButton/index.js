import styled from 'styled-components';

// eslint-disable-next-line no-restricted-imports
import Button from '../Button';

// eslint-disable-next-line no-restricted-imports
import defaultTheme from '../../consts/theme';

const ThemedButton = styled(Button)`
    background: ${props => props.theme.button.background} !important;
    border-color: ${props => props.theme.button.background} !important;

    &:hover {
        background: ${props => props.theme.button.backgroundHover} !important;
        border-color: ${props => props.theme.button.backgroundHover} !important;
    }
`;

ThemedButton.defaultProps = {
    theme: defaultTheme,
};

/** @component */
export default ThemedButton;
