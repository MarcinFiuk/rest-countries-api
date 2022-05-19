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
    width: 100px;
    height: 100px;
    margin-inline: auto;

    &:after {
        content: ' ';
        display: block;
        width: 90px;
        height: 90px;
        margin: 8px;
        border-radius: 50%;
        border: 7px solid red;
        border-color: var(--textColor) transparent;
        animation: ${AAA} 1.2s linear infinite;
    }
`;

export default Spinner;
