import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import AllCountries from './pages/AllCountries';
import DisplayIndividualCountry from './pages/DisplayIndividualCountry';
import { Reset } from './styles/Reset';
import { GlobalStyle } from './styles/Global';
import FlagsContextProvider from './context/FlagsContext';

function App() {
    const [colorTheme, setColorTheme] = useState('light');

    const getColorMode = (mode) => {
        setColorTheme(mode);
    };

    return (
        <FlagsContextProvider>
            <Reset />
            <GlobalStyle colorMode={colorTheme} />
            <Header
                getColorTheme={(mode) => getColorMode(mode)}
                theme={colorTheme}
            />
            <MainStyled>
                <Routes>
                    <Route path='/' element={<AllCountries />} />
                    <Route
                        path=':name'
                        element={<DisplayIndividualCountry />}
                    />
                    <Route path='*' element={<p>There's nothing here!</p>} />
                </Routes>
            </MainStyled>
        </FlagsContextProvider>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;

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
