import styled from 'styled-components';

import useAxios from './../hooks/useAxios';
import Country from './Country';

function Main() {
    const { data, error } = useAxios(
        'https://restcountries.com/v2',
        '/all',
        '?fields=flags,name,population,region,capital'
    );

    const countries = data.length > 0 && (
        <>
            <Country country={data[55]} /> <Country country={data[56]} />
            <Country country={data[88]} /> <Country country={data[210]} />
            <Country country={data[53]} /> <Country country={data[66]} />
            <Country country={data[84]} /> <Country country={data[10]} />
        </>
    );

    return (
        <MainStyled>
            <Wrapper>{countries}</Wrapper>
        </MainStyled>
    );
}

const MainStyled = styled.main`
    background-color: var(--veryLightGray);
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
    gap: 4.6875rem;
    padding-inline: clamp(3.5rem, 10vw, 5rem);
    padding-block: clamp(2rem, 5vw, 3rem);
`;

export default Main;
