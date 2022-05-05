import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'; //NOTE:: use it inside input->placeholder

function SearchBar({ getRegion, getCountry }) {
    const setRegion = (e) => {
        getRegion(e.target.value);
    };

    const setCountry = (e) => {
        getCountry(e.target.value);
    };

    return (
        <Wrapper>
            <Input
                type='search'
                placeholder='Search for a country…'
                onChange={setCountry}
            />
            <Select onChange={setRegion}>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: var(--fontWeight-400);
`;

const Input = styled.input`
    max-width: 480px;
    width: 100%;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    border: none;
    padding-block: clamp(14px, 1.5vw, 18px);
    padding-inline: 32px;
    color: var(--lightGray);
    background: var(--white);
    vertical-align: middle;
    font-weight: var(--fontWeight-400);
`;

const Select = styled.select`
    width: 200px;
    background: var(--white);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    border: none;
    padding-block: clamp(14px, 1.5vw, 18px);
    padding-inline: 24px;
    color: var(--veryDarkBlue-2);
    vertical-align: middle;
    font-weight: var(--fontWeight-400);
`;

//NOTE: work on individual paddings and change px to rem

export default SearchBar;
