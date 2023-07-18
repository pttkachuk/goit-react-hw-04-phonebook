import PropTypes from 'prop-types';
import { StyledContact, StyledContactList, StyledDatas, StyledListBtn } from './ContactListStyled';

const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
        <StyledContactList>
            {contacts.map(({ id, number, name }) => {
                return (
                    <StyledContact key={id}>
                        <StyledDatas>{name}: {number}</StyledDatas>
                        <StyledListBtn
                            type="button"
                            name="delete"
                            onClick={() => handleDeleteContact(id)}
                        >
                            Delete
                        </StyledListBtn>
                    </StyledContact>
                )
            })}
        </StyledContactList>
    )
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ),
    handleDeleteContact: PropTypes.func.isRequired,
};