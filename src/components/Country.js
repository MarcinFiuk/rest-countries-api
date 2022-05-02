import styled from 'styled-components';

function Country({ country }) {
    const { flags, name, population, region, capital } = country || {};

    return (
        <Wrapper>
            <FlagWrapper>
                <img src={flags.png} alt={'flag of ' + name} />
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
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    background-color: var(--white);
    overflow: hidden;
`;

const FlagWrapper = styled.div`
    width: 100%;
    aspect-ratio: 2/1.21;

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
