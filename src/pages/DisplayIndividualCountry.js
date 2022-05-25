import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import useAxios from '../hooks/useAxios';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import { FlagsContext } from './../context/FlagsContext';

function DisplayIndividualCountry() {
    const { name: country } = useParams();
    const navigate = useNavigate();
    const { data: contextData } = useContext(FlagsContext);
    const { alphaName } = contextData;
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        `/name/${country}`,
        {
            fields: 'flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders',
        }
    );

    const renderBorders = (borders = []) => {
        if (borders.length > 0) {
            return borders.map((border, index) => {
                const fullName = alphaName[border];
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
        return 'unknown';
    };

    const renderCurrency = (currency = []) => {
        if (currency.length > 0) {
            return currency[0].name;
        }

        return 'country does not have an official currency';
    };

    const returnHandle = () => {
        return navigate(-1);
    };

    return (
        <>
            {isLoading && <Spinner />}
            {error && <Error errorInfo={error} />}
            {!error && !isLoading && (
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
                                    <button onClick={returnHandle}>
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
                                                <h2>{name}</h2>
                                            </TitleWrapper>
                                            <InfoColumns>
                                                <FirstInfoColumn>
                                                    <p>
                                                        <BoldWrapper>
                                                            Native Name:&nbsp;
                                                        </BoldWrapper>
                                                        {nativeName}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            Population:&nbsp;
                                                        </BoldWrapper>
                                                        {population.toLocaleString()}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            Region:&nbsp;
                                                        </BoldWrapper>
                                                        {region}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            Sub Region:&nbsp;
                                                        </BoldWrapper>
                                                        {subregion}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            Capital:&nbsp;
                                                        </BoldWrapper>
                                                        {capital}
                                                    </p>
                                                </FirstInfoColumn>
                                                <SecondInfoColumn>
                                                    <p>
                                                        <BoldWrapper>
                                                            Top Level
                                                            Domain:&nbsp;
                                                        </BoldWrapper>
                                                        {topLevelDomain[0]}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            Currencies:&nbsp;
                                                        </BoldWrapper>
                                                        {renderCurrency(
                                                            currencies
                                                        )}
                                                    </p>
                                                    <p>
                                                        <BoldWrapper>
                                                            {languages.length <
                                                            2
                                                                ? 'Language:'
                                                                : 'Languages:'}
                                                            &nbsp;
                                                        </BoldWrapper>
                                                        {renderLanguage(
                                                            languages
                                                        )}
                                                    </p>
                                                </SecondInfoColumn>
                                            </InfoColumns>
                                            <BorderWrapper>
                                                <p>
                                                    <BoldWrapper>
                                                        {borders?.length > 1
                                                            ? 'Border Countries:'
                                                            : 'Border Country:'}
                                                        &nbsp;
                                                    </BoldWrapper>
                                                </p>
                                                <div>
                                                    {renderBorders(borders)}
                                                </div>
                                            </BorderWrapper>
                                        </TextWrapper>
                                    </CountryWrapper>
                                </MainWrapper>
                            );
                        })}
                </div>
            )}
        </>
    );
}

const MainWrapper = styled.div`
    padding-block: clamp(2.5rem, 1.4rem + 4.5vw, 5rem);
    padding-inline: clamp(1.75rem, 0.6rem + 4.9vw, 5rem);

    button,
    a {
        background-color: var(--elementColor);
        color: var(--textColor);
        transition: all 0.3s ease-in;
    }

    a {
        border-radius: var(--border-radius-1);
        box-shadow: 0px 0px 4px 1px hsla(0, 0%, 0%, 0.1);
        padding-block: 0.3125rem;
        padding-inline: 1.625rem;
        text-decoration: none;
    }

    button {
        align-items: center;
        border-radius: var(--border-radius-2);
        border: none;
        box-shadow: 0px 0px 7px hsla(0, 0%, 0%, 0.29);
        display: flex;
        font-size: 1rem;
        font-weight: var(--fontWeight-300);
        gap: 10px;
        justify-content: center;
        line-height: 1.25rem;
        padding-block: 0.625rem;
        padding-inline: 2rem;
    }
`;

const CountryWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 44px;
    margin-top: clamp(4rem, 3.6rem + 1.8vw, 5rem);

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

const FlagWrapper = styled.div`
    aspect-ratio: 320/229;
    background: #808080;
    border-radius: var(--border-radius-3);
    box-shadow: 0px 0px 14px 4px hsla(0, 0%, 0%, 0.03);
    flex: 1;
    max-width: 35rem;
    min-width: 20rem;
    overflow: hidden;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
`;

const TextWrapper = styled.div`
    @media (min-width: 50rem) {
        max-width: 50%;
    }
`;

const TitleWrapper = styled.div`
    margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
`;

const InfoColumns = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 62rem) {
        align-items: center;
        flex-direction: row;
        gap: 32px;
        justify-content: space-between;
    }
`;

const FirstInfoColumn = styled.div``;

const SecondInfoColumn = styled.div`
    margin-top: 2rem;

    @media (min-width: 62rem) {
        margin-top: 0;
    }
`;

const BorderWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: clamp(2rem, 1.2rem + 3.4vw, 4.25rem);

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
`;

const BoldWrapper = styled.span`
    font-weight: var(--fontWeight-600);
`;

export default DisplayIndividualCountry;
