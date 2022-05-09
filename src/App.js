import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAxios from './hooks/useAxios';
import Countries from './components/Countries';
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
        { fields: 'flags,name,population,region,capital' }
    );

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
            countries = countries.filter((country) => {
                return country.name.toLowerCase().includes(filterByCountry);
            });
        }

        return countries;
    };

    const countriesToDisplay = updatedData();

    const getRegionHandler = (region) => {
        setFilterByRegion(region);
    };

    const getCountryName = (country) => {
        setFilterByCountry(country);
    };

    const getColorMode = (mode) => {
        setColorTheme(mode);
    };

    return (
        <>
            <Reset />
            <GlobalStyle colorMode={colorTheme} />
            <Header
                getColorTheme={(mode) => getColorMode(mode)}
                theme={colorTheme}
            />
            <MainStyled>
                {isLoading && <Spinner />}
                {error && <Error errorInfo={error} />}
                <SearchBar
                    getRegion={(region) => getRegionHandler(region)}
                    getCountry={(country) => getCountryName(country)}
                />
                <Countries countriesSlice={countriesToDisplay} />
            </MainStyled>
        </>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    background-color: var(--backgroundColor);
    padding-inline: clamp(3.5rem, 10vw, 5rem);
    transition: background-color 0.3s linear;
`;

export default App;
