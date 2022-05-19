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
    grid-template-columns: repeat(auto-fit, 246px);
    justify-content: center;
    gap: 6.1rem;
    padding-block: clamp(2rem, 5vw, 3rem);
    padding-inline: clamp(1rem, -0.45rem + 6vw, 5rem);
`;

const LinkStyled = styled(Link)`
    color: unset;
    text-decoration: none;
    margin-inline: auto;
`;

export default Countries;
