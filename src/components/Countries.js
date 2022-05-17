import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Country from './Country';

function Countries({ countriesSlice }) {
    const countries = countriesSlice.map((country) => (
        <LinkStyled key={country.name} to={`/${country.name}`}>
            <Country key={country.name} country={country} />
        </LinkStyled>
    ));

    return <Wrapper>{countries}</Wrapper>;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
    gap: 4.6875rem;
    padding-block: clamp(2rem, 5vw, 3rem);
`;

const LinkStyled = styled(Link)`
    color: unset;
    text-decoration: none;
    margin-inline: auto;
`;

export default Countries;
