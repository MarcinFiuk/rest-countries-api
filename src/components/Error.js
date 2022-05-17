import styled from 'styled-components';

function Error({ errorInfo }) {
    const statusToDisplay = errorInfo.response?.status;

    return (
        <Wrapper>
            <p>I'm sorry but something went wrong.</p>
            <p>Code:{statusToDisplay}</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 25vh;

    p {
        text-align: center;
        font-weight: var(--fontWeight-800);
        font-size: clamp(0.875rem, 0.65rem + 0.94vw, 1.5rem);
        line-height: 1.125rem;
        text-transform: capitalize;
        padding-block: 1rem;
    }
`;

export default Error;
