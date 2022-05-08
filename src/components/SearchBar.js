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
            <PositioningElement>
                <Input
                    type='search'
                    placeholder='Search for a country…'
                    onChange={setCountry}
                />
                <SearchIconStyled />
            </PositioningElement>
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
    font-size: 14px;
    font-weight: var(--fontWeight-400);
    gap: 40px;
    margin-top: clamp(1.5rem, 0.97rem + 2.3vw, 3rem);
`;

const PositioningElement = styled.div`
    position: relative;
    max-width: 480px;
    width: 100%;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    padding-block: clamp(14px, 1.5vw, 18px);
    padding-left: 70px;
    padding-right: 28px;
    color: var(--lightGray);
    background: var(--elementColor);
    font-weight: var(--fontWeight-400);
    color: var(--inputColor);

    &::placeholder {
        color: var(--inputColor);
    }
`;

const SearchIconStyled = styled(AiOutlineSearch)`
    position: absolute;
    aspect-ratio: 1/1;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
    left: 28px;
    color: var(--veryDarkBlue-2);
    color: var(--textColor);
`;

const Select = styled.select`
    width: 200px;
    background: var(----elementColor);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    border: none;
    padding-block: clamp(14px, 1.5vw, 18px);
    padding-inline: 24px;
    color: var(--textColor);
    font-weight: var(--fontWeight-400);
`;

//NOTE: work on individual paddings and change px to rem

export default SearchBar;
