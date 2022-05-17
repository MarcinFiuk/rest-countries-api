import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import useAxios from '../hooks/useAxios';

function DisplayIndividualCountry({ codeNameArr }) {
    const { name: country } = useParams();
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        `/name/${country}`,
        {
            fields: 'flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders',
        }
    );

    const getFullCountryName = (code, codeNameArray = []) => {
        const codeNameObj = codeNameArray.find((element) => {
            const [key] = Object.keys(element);
            return key === code;
        });
        const [value] = Object.values(codeNameObj);
        return value;
    };

    const renderBorders = (borders = []) => {
        if (borders.length > 0) {
            return borders.map((border, index) => {
                const fullName = getFullCountryName(border, codeNameArr);
                return (
                    <Link to={`../${fullName}`} key={index}>
                        {fullName}
                    </Link>
                );
            });
        }

        return 'country without a land border';
    };

    const renderLanguage = (languages = []) => {
        if (languages.length > 0) {
            return languages.reduce((prevString, lang, index) => {
                if (languages.length - 1 === index) {
                    return prevString + lang.name;
                }
                return prevString + lang.name + ', ';
            }, '');
        }
        return 'language unknown';
    };

    return (
        <div>
            {data.length > 0 &&
                data.map((country, index) => {
                    const {
                        flags,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders,
                    } = country;

                    return (
                        <MainWrapper key={index}>
                            <button>
                                <HiOutlineArrowLeft />
                                Back
                            </button>
                            <CountryWrapper>
                                <FlagWrapper>
                                    <img
                                        src={flags.png}
                                        alt={'flag of ' + name}
                                    />
                                </FlagWrapper>
                                <TextWrapper>
                                    <TitleWrapper>
                                        <h3>{name}</h3>
                                    </TitleWrapper>
                                    <InfoColumns>
                                        <FirstInfoColumn>
                                            <p>
                                                <BoldWrapper>
                                                    Native Name:{' '}
                                                </BoldWrapper>
                                                {nativeName}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Population:{' '}
                                                </BoldWrapper>
                                                {population}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Region:{' '}
                                                </BoldWrapper>
                                                {region}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Sub Region:{' '}
                                                </BoldWrapper>
                                                {subregion}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Capital:{' '}
                                                </BoldWrapper>
                                                {capital}
                                            </p>
                                        </FirstInfoColumn>
                                        <SecondInfoColumn>
                                            <p>
                                                <BoldWrapper>
                                                    Top Level Domain:{' '}
                                                </BoldWrapper>{' '}
                                                {topLevelDomain[0]}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Currencies:{' '}
                                                </BoldWrapper>

                                                {currencies[0].name}
                                            </p>
                                            <p>
                                                <BoldWrapper>
                                                    Languages:{' '}
                                                </BoldWrapper>
                                                {renderLanguage(languages)}
                                            </p>
                                        </SecondInfoColumn>
                                    </InfoColumns>
                                    <BorderWrapper>
                                        <p>
                                            <BoldWrapper>
                                                Border Countries:
                                            </BoldWrapper>{' '}
                                        </p>
                                        <div>{renderBorders(borders)}</div>
                                    </BorderWrapper>
                                </TextWrapper>
                            </CountryWrapper>
                        </MainWrapper>
                    );
                })}
        </div>
    );
}

const MainWrapper = styled.div`
    padding-inline: clamp(1.75rem, 0.6rem + 4.9vw, 5rem);
    padding-block: clamp(2.5rem, 1.4rem + 4.5vw, 5rem);

    button,
    a {
        background-color: var(--elementColor);
        color: var(--textColor);
    }

    a {
        margin: 10px;
        text-decoration: none;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding-block: 5px;
        padding-inline: 27px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: none;
        box-shadow: 0px 0px 7px hsla(0, 0%, 0%, 0.29);
        border-radius: 6px;
        font-weight: var(--fontWeight-300);
        font-size: 1rem;
        line-height: 20px;
        padding-block: 10px;
        padding-inline: 2rem;
    }
`;

const CountryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: space-between; */
    gap: 44px;
    margin-top: clamp(4rem, 3.6rem + 1.8vw, 5rem);

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

const FlagWrapper = styled.div`
    min-width: 320px;
    max-width: 560px;
    width: 100%;
    aspect-ratio: 320/229;
    flex: 1;

    img {
        width: 100%;
        height: 100%;
    }
`;

const TextWrapper = styled.div`
    max-width: 50%;
    /* @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        column-gap: 100px;
        grid-template-areas:
            'title title'
            'info-1 info-2'
            'info-3 info-3';
    } */
`;

const TitleWrapper = styled.div`
    grid-area: title;
    margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
`;

const InfoColumns = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }
`;

const FirstInfoColumn = styled.div`
    grid-area: info-1;
`;

const SecondInfoColumn = styled.div`
    grid-area: info-2;
    margin-top: 2rem;

    @media (min-width: 992px) {
        margin-top: 0;
    }
`;

const BorderWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-area: info-3;
    margin-top: clamp(2rem, 1.2rem + 3.4vw, 4.25rem);

    div {
        display: flex;
        flex-wrap: wrap;
    }
`;

const BoldWrapper = styled.span`
    font-weight: var(--fontWeight-600);
`;

export default DisplayIndividualCountry;
