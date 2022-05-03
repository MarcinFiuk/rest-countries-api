import styled from 'styled-components';

import { FiMoon } from 'react-icons/fi';

function Header() {
    return (
        <HeaderStyled>
            <h1>Where in the world?</h1>
            <button>
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
    background: var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    padding-block: clamp(
        1.5rem,
        2.18rem + -0.75vw,
        2rem
    ); //reverse padding mobile bigger that desktop
    padding-inline: clamp(3.5rem, 10vw, 5rem);

    button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        padding: 0;
        font-weight: var(--fontWeight-600);
        font-size: clamp(0.75rem, 0.66rem + 0.38vw, 1rem);
        line-height: 1rem;
        color: var(--veryDarkBlue-2);
    }
`;

const StyledIcon = styled(FiMoon)`
    vertical-align: middle;
    fill: transparent;
    margin-right: 0.5rem;
`;

export default Header;
