import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAxios from './hooks/useAxios';
import Countries from './components/Countries';
import Spinner from './components/Spinner';
import Error from './components/Error';

function App() {
    const [numberCountries, setNumberCountries] = useState(8);
    const [countriesToDisplay, setCountriesToDisplay] = useState([]);
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        '/all',
        '?fields=flags,name,population,region,capital'
    );

    useEffect(() => {
        const pieceOfData = data.slice(0, numberCountries);
        setCountriesToDisplay(pieceOfData);
    }, [numberCountries, data]);

    const displayMoreCountriesHandler = () => {
        setNumberCountries((prevNr) => prevNr + 8);
    };

    return (
        <>
            <Header>
                <h1>Where in the world?</h1>
                <button>
                    <span>icon</span>Dark Mode
                </button>
            </Header>
            <MainStyled>
                {isLoading && <Spinner />}
                {error && <Error errorInfo={error} />}
                <Countries countriesSlice={countriesToDisplay} />
                <LoadMoreButton onClick={displayMoreCountriesHandler}>
                    Load More
                </LoadMoreButton>
            </MainStyled>
        </>
    );
}

const Header = styled.header``;

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    background-color: var(--veryLightGray);
`;

const LoadMoreButton = styled.button`
    margin: 0 auto;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    border: none;
    border-radius: 5px;
    background-color: var(--white);
    //NOTE: add width and height
`;

export default App;
