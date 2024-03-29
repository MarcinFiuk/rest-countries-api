import { useState, useContext } from 'react';
import Fuse from 'fuse.js';

import Spinner from './../components/Spinner';
import Error from './../components/Error';
import SearchBar from './../components/SearchBar';
import Countries from './../components/Countries';
import { FlagsContext } from './../context/FlagsContext';

function AllCountries() {
    const [filterByRegion, setFilterByRegion] = useState('');
    const [filterByCountry, setFilterByCountry] = useState('');
    const { data, error, isLoading } = useContext(FlagsContext);

    const getRegionHandler = (region) => {
        setFilterByRegion(region);
    };

    const getCountryName = (country) => {
        setFilterByCountry(country);
    };

    const mapFuseArrToOutputArr = (arr) => {
        const newArr = arr.map((element) => element.item);

        return newArr;
    };

    const updatedData = () => {
        let countries = data.data;

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

    return (
        <>
            {isLoading && <Spinner />}
            {error && <Error errorInfo={error} />}
            {!error && !isLoading && (
                <>
                    <SearchBar
                        getRegion={getRegionHandler}
                        getCountry={getCountryName}
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
}

export default AllCountries;
