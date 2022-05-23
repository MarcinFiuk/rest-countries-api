import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
            <Link to='/'>
                <h1>Where in the world?</h1>
            </Link>
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
    align-items: center;
    background: var(--elementColor);
    box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.06);
    display: flex;
    justify-content: space-between;
    padding-block: clamp(
        1.5rem,
        2.2rem + -0.7vw,
        2rem
    ); //reverse padding - mobile bigger that desktop
    padding-inline: clamp(1rem, -0.4rem + 6vw, 5rem);
    transition: background-color 0.3s ease-in;

    button {
        align-items: center;
        background-color: transparent;
        border: none;
        color: inherit;
        display: flex;
        font-size: clamp(0.75rem, 0.66rem + 0.38vw, 1rem);
        font-weight: var(--fontWeight-600);
        line-height: 1rem;
        padding: 0;
    }

    a {
        color: unset;
        text-decoration: none;
    }
`;

const StyledIcon = styled(FiMoon)`
    fill: var(--svgFill);
    margin-right: 0.5rem;
    transition: fill 0.3s ease-in;
    vertical-align: middle;
`;

export default Header;
