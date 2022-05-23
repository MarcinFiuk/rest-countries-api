import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ getRegion, getCountry }) {
    const debounce = (func, timeout = 300) => {
        let timerId;

        return (...args) => {
            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(() => {
                func(...args);
            }, timeout);
        };
    };

    const setRegion = (e) => {
        getRegion(e.target.value);
    };

    const setCountry = debounce((e) => {
        getCountry(e.target.value);
    });

    return (
        <Wrapper>
            <PositioningElement>
                <Input
                    type='search'
                    placeholder='Search for a country…'
                    onChange={setCountry}
                />
                <SearchIconStyled />
            </PositioningElement>
            <Select
                onChange={setRegion}
                aria-label='Search countries by region'
            >
                <option value=''>Filter By Region</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </Select>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;
    font-weight: var(--fontWeight-400);
    gap: 40px;
    justify-content: space-between;
    margin-top: clamp(1.5rem, 0.97rem + 2.3vw, 3rem);
    padding-inline: clamp(1rem, -0.45rem + 6vw, 5rem);
`;

const PositioningElement = styled.div`
    border-radius: 0.3125em;
    box-shadow: 0px 2px 9px hsla(0, 0%, 0%, 0.06);
    max-width: 30rem;
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    background-color: var(--elementColor);
    border: none;
    color: var(--lightGray);
    color: var(--textColor);
    font-weight: var(--fontWeight-400);
    padding-block: clamp(0.875rem, 1.5vw, 1.125rem);
    padding-left: 4.375rem;
    padding-right: 1.75rem;
    transition: all 0.3s ease-in;
    width: 100%;

    &::placeholder {
        color: var(--inputColor);
        transition: color 0.3s ease-in;
    }
`;

const SearchIconStyled = styled(AiOutlineSearch)`
    aspect-ratio: 1/1;
    color: var(--textColor);
    left: 1.75rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.3s ease-in;
    width: 1.125rem;
`;

const Select = styled.select`
    background: var(--elementColor);
    border-radius: 0.3125em;
    border: none;
    box-shadow: 0px 2px 9px hsla(0, 0%, 0%, 0.06);
    color: var(--textColor);
    font-weight: var(--fontWeight-400);
    padding-block: clamp(0.875rem, 1.5vw, 1.125rem);
    padding-inline: 1.5rem;
    transition: all 0.3s ease-in;
    width: 12.5rem;
`;

export default SearchBar;
