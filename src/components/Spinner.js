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
    height: 6.25rem;
    margin-inline: auto;
    width: 6.25rem;

    &:after {
        animation: ${AAA} 1.2s linear infinite;
        border-color: var(--textColor) transparent;
        border-radius: 50%;
        border: 0.5rem solid red;
        content: ' ';
        display: block;
        height: 5.625rem;
        margin: 0.5rem;
        transition: border-color 0.3s ease-in;
        width: 5.625rem;
    }
`;

export default Spinner;
