import styled from 'styled-components';

function Country({ country }) {
    const { flags, name, population, region, capital } = country || {};
    const { png } = flags;

    return (
        <Wrapper>
            <FlagWrapper>
                <img src={png} alt={'flag of ' + name} />
            </FlagWrapper>
            <TextWrapper>
                <h2>{name}</h2>
                <p>
                    <BoldWrapper>Population:</BoldWrapper>{' '}
                    {population.toLocaleString()}
                </p>
                <p>
                    <BoldWrapper>Region:</BoldWrapper> {region}
                </p>
                <p>
                    <BoldWrapper>Capital:</BoldWrapper> {capital}
                </p>
            </TextWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: var(--elementColor);
    border-radius: var(--border-radius-2);
    box-shadow: 0px 0px 7px 2px hsla(0, 0%, 0%, 0.03);
    justify-self: center;
    max-width: 20rem;
    overflow: hidden;
    transition: background-color 0.3s ease-in;
`;

const FlagWrapper = styled.div`
    aspect-ratio: 246/160;
    max-width: 15.375rem;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
`;

const TextWrapper = styled.div`
    padding: 1.5rem;
    padding-bottom: 2.875rem;

    h3 {
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: var(--fontWeight-300);
        line-height: 1rem;
        margin-bottom: 0.5rem;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

const BoldWrapper = styled.span`
    font-weight: var(--fontWeight-600);
`;

export default Country;
