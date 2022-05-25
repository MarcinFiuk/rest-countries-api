import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Country from './Country';

function Countries({ countriesSlice }) {
    console.log(countriesSlice);
    const countries = countriesSlice.map((country) => (
        <LinkStyled key={country.name} to={`/${country.name}`}>
            <Country key={country.name} country={country} />
        </LinkStyled>
    ));

    return <Wrapper>{countries}</Wrapper>;
}

const Wrapper = styled.div`
    display: grid;
    gap: 97px;
    grid-template-columns: repeat(auto-fit, 15.375rem);
    justify-content: center;
    padding-block: clamp(2rem, 5vw, 3rem);
    padding-inline: clamp(1rem, -0.45rem + 6vw, 5rem);
`;

const LinkStyled = styled(Link)`
    color: unset;
    margin-inline: auto;
    text-decoration: none;
`;

export default Countries;
