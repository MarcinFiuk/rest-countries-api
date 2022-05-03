import styled from 'styled-components';

import Country from './Country';

function Countries({ countriesSlice }) {
    const countries =
        countriesSlice.length > 0 &&
        countriesSlice.map((country) => (
            <Country key={country.name} country={country} />
        ));

    return <Wrapper>{countries}</Wrapper>;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
    gap: 4.6875rem;
    padding-inline: clamp(3.5rem, 10vw, 5rem);
    padding-block: clamp(2rem, 5vw, 3rem);
`;

export default Countries;
