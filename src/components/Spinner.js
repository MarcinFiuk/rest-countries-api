import styled, { keyframes } from 'styled-components';

function Spinner() {
    return <SpinnerStyled />;
}
const AAA = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;

const SpinnerStyled = styled.div`
    display: inline-block;
    width: 6.25rem;
    height: 6.25rem;
    margin-inline: auto;

    &:after {
        animation: ${AAA} 1.2s linear infinite;
        border: 0.5rem solid var(--textColor);
        border-color: var(--textColor) transparent; //NOTE:border-color overwrite color assigned in border shortcut
        border-radius: 50%;
        content: ' ';
        display: block;
        height: 5.625rem;
        margin: 0.5rem;
        transition: border 0.3s ease-in;
        width: 5.625rem;
    }
`;

export default Spinner;
