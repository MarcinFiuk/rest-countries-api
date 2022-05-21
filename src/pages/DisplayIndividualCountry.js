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
                                                <h3>{name}</h3>
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

                                                        {currencies[0].name}
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
    padding-inline: clamp(1.75rem, 0.6rem + 4.9vw, 5rem);
    padding-block: clamp(2.5rem, 1.4rem + 4.5vw, 5rem);

    button,
    a {
        background-color: var(--elementColor);
        color: var(--textColor);
    }

    a {
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
    background: #808080;
    box-shadow: 0px 0px 14px 4px hsla(0, 0%, 0%, 0.03);
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

const TextWrapper = styled.div`
    @media (min-width: 810px) {
        max-width: 50%;
    }
`;

const TitleWrapper = styled.div`
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

const FirstInfoColumn = styled.div``;

const SecondInfoColumn = styled.div`
    margin-top: 2rem;

    @media (min-width: 992px) {
        margin-top: 0;
    }
`;

const BorderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: clamp(2rem, 1.2rem + 3.4vw, 4.25rem);
    gap: 1rem;

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
`;

const BoldWrapper = styled.span`
    font-weight: var(--fontWeight-600);
`;

export default DisplayIndividualCountry;
