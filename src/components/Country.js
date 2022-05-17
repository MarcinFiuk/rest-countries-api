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
                <h3>{name}</h3>
                <p>
                    <BoldWrapper>Population:</BoldWrapper> {population}
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
    justify-self: center;
    max-width: 20rem;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    background-color: var(--elementColor);
    overflow: hidden;
`;

const FlagWrapper = styled.div`
    max-width: 246px;
    width: 100%;
    aspect-ratio: 246/160;

    img {
        width: 100%;
        height: 100%;
    }
`;

const TextWrapper = styled.div`
    padding: 1.5rem;
    padding-bottom: 2.875rem;

    h3 {
        margin-bottom: 1rem;
    }

    p {
        font-weight: var(--fontWeight-300);
        font-size: 0.875rem;
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
