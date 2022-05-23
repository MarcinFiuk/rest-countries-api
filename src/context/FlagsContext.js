import { createContext } from 'react';
import useAxios from './../hooks/useAxios';

export const FlagsContext = createContext({
    data: null,
    error: null,
    isLoading: false,
});

function FlagsContextProvider({ children }) {
    const { data, error, isLoading } = useAxios(
        'https://restcountries.com/v2',
        '/all',
        { fields: 'flags,name,population,region,capital,alpha3Code' }
    );
    const alphaName = {};

    for (const country of data) {
        alphaName[country.alpha3Code] = country.name;
    }

    const context = { data: { data, alphaName }, error, isLoading };

    return (
        <FlagsContext.Provider value={context}>
            {children}
        </FlagsContext.Provider>
    );
}

export default FlagsContextProvider;
