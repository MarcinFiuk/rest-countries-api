import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAxios from './hooks/useAxios';
import Countries from './components/Countries';
import Spinner from './components/Spinner';
import Error from './components/Error';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
    const [countriesToDisplay, setCountriesToDisplay] = useState([]);
    const [filterByRegion, setFilterByRegion] = useState('');
    const [filterByCountry, setFilterByCountry] = useState('');
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        '/all',
        '?fields=flags,name,population,region,capital'
    );

    useEffect(() => {
        let dataToDisplay = data;

        if (filterByRegion) {
            dataToDisplay = dataToDisplay.filter(
                (country) =>
                    country.region.toLowerCase() ===
                    filterByRegion.toLowerCase()
            );
        }

        if (filterByCountry) {
            dataToDisplay = dataToDisplay.filter((country) => {
                return country.name.toLowerCase().includes(filterByCountry);
            });
        }

        setCountriesToDisplay(dataToDisplay);
    }, [data, filterByRegion, filterByCountry]);

    const getRegionHandler = (region) => {
        setFilterByRegion(region);
    };

    const getCountryName = (country) => {
        setFilterByCountry(country);
    };

    return (
        <>
            <Header />
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
    background-color: var(--veryLightGray);
    padding-inline: clamp(3.5rem, 10vw, 5rem);
`;

export default App;
