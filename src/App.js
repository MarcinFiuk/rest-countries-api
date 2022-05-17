import { useState } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { Route, Routes } from 'react-router-dom';

import useAxios from './hooks/useAxios';
import Countries from './components/Countries';
import DisplayIndividualCountry from './components/DisplayIndividualCountry';
import Spinner from './components/Spinner';
import Error from './components/Error';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Reset } from './components/styles/Reset';
import { GlobalStyle } from './components/styles/Global';

function App() {
    const [filterByRegion, setFilterByRegion] = useState('');
    const [filterByCountry, setFilterByCountry] = useState('');
    const [colorTheme, setColorTheme] = useState('light');
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        '/all',
        { fields: 'flags,name,population,region,capital,alpha3Code' }
    );

    const mapFuseArrToOutputArr = (arr) => {
        const newArr = arr.map((element) => element.item);

        return newArr;
    };

    const updatedData = () => {
        let countries = data;

        if (filterByRegion) {
            countries = countries.filter(
                (country) =>
                    country.region.toLowerCase() ===
                    filterByRegion.toLowerCase()
            );
        }

        if (filterByCountry) {
            const options = {
                threshold: 0.3,
                keys: ['name'],
            };

            const fuse = new Fuse(countries, options);

            const fuseResult = fuse.search(filterByCountry);

            countries = mapFuseArrToOutputArr(fuseResult);
        }

        return countries;
    };

    const countriesToDisplay = updatedData();

    const arrOfAlpha3CodeAndName = (data) => {
        const arr = [];
        data.map((country) => {
            const { alpha3Code, name } = country;
            arr.push({ [alpha3Code]: name });
        });
        return arr;
    };

    const arrCodeName = arrOfAlpha3CodeAndName(data);

    const getRegionHandler = (region) => {
        setFilterByRegion(region);
    };

    const getCountryName = (country) => {
        setFilterByCountry(country);
    };

    const getColorMode = (mode) => {
        setColorTheme(mode);
    };

    const mainContent = (
        <>
            {isLoading && <Spinner />}
            {error && <Error errorInfo={error} />}
            {!error && (
                <>
                    <SearchBar
                        getRegion={(region) => getRegionHandler(region)}
                        getCountry={(country) => getCountryName(country)}
                    />
                    {countriesToDisplay.length > 0 && (
                        <Countries countriesSlice={countriesToDisplay} />
                    )}
                    {countriesToDisplay.length === 0 && (
                        <p>No country match search parameter</p>
                    )}
                </>
            )}
        </>
    );

    return (
        <>
            <Reset />
            <GlobalStyle colorMode={colorTheme} />
            <Header
                getColorTheme={(mode) => getColorMode(mode)}
                theme={colorTheme}
            />
            <MainStyled>
                <Routes>
                    <Route path='/' element={mainContent} />
                    <Route
                        path=':name'
                        element={
                            <DisplayIndividualCountry
                                codeNameArr={arrCodeName}
                            />
                        }
                    />
                    <Route path='*' element={<p>There's nothing here!</p>} />
                </Routes>
            </MainStyled>
        </>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    /* padding-inline: clamp(1rem, -0.45rem + 6vw, 5rem); */

    & > p {
        text-align: center;
        font-weight: var(--fontWeight-800);
        font-size: clamp(0.875rem, 0.65rem + 0.94vw, 1.5rem);
        line-height: 1.125rem;
        text-transform: capitalize;
        padding-block: 5rem;
    }
`;

export default App;
