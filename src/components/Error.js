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
        font-size: clamp(0.875rem, 0.7rem + 0.9vw, 1.5rem);
        font-weight: var(--fontWeight-800);
        line-height: 1.125rem;
        padding-block: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
`;

export default Error;
