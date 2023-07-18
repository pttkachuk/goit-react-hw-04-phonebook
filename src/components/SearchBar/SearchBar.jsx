import { StyledSearchDiv, StyledSearchInput, StyledSearchLabel, StyledSearchSpan } from "./SearchBarStyled";
import PropTypes from 'prop-types';

const SearchBar = ({ value, handleChangeFilterInput }) => {
    return (
        <StyledSearchDiv>
            <StyledSearchLabel >
                <StyledSearchSpan>Find contacts by name</StyledSearchSpan>
                <StyledSearchInput
                type="text"
                name="Search Bar"
                placeholder="Search contact..."
                value={value}
                onChange={handleChangeFilterInput}
                />
            </StyledSearchLabel>
            
        </StyledSearchDiv>
    )
};

export default SearchBar;


SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    handleChangeFilterInput: PropTypes.func.isRequired,
}