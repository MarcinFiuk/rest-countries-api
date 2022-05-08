import styled from 'styled-components';

import { FiMoon } from 'react-icons/fi';

function Header({ getColorTheme, theme }) {
    const changeColorModeHandler = () => {
        if (theme === 'light') {
            return getColorTheme('dark');
        }

        if (theme === 'dark') {
            return getColorTheme('light');
        }
    };

    return (
        <HeaderStyled>
            <h1>Where in the world?</h1>
            <button onClick={changeColorModeHandler}>
                <span>
                    <StyledIcon />
                </span>
                Dark Mode
            </button>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--elementColor);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    padding-block: clamp(
        1.5rem,
        2.18rem + -0.75vw,
        2rem
    ); //reverse padding - mobile bigger that desktop
    padding-inline: clamp(3.5rem, 10vw, 5rem);
    transition: background-color 0.3s linear;

    button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        padding: 0;
        font-weight: var(--fontWeight-600);
        font-size: clamp(0.75rem, 0.66rem + 0.38vw, 1rem);
        line-height: 1rem;
        color: inherit;
    }
`;

const StyledIcon = styled(FiMoon)`
    vertical-align: middle;
    fill: var(--svgFill);
    margin-right: 0.5rem;
`;

export default Header;
