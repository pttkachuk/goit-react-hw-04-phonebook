import { useState } from 'react'
import PropTypes from 'prop-types';
import { StyledBtn, StyledContactDiv, StyledContactForm, StyledInput, StyledLabel, StyledSpan } from './ContactFormStyled';

export default function ContactForm({onSubmit}) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const onNameChange = (event) => {
    setName(event.target.value);
};
  
const onNumberChange = (event) => {
    setNumber(event.target.value);
};
const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
};

const reset = () => {
    setName('');
    setNumber('');
};

  
return (
    <StyledContactDiv>
         <StyledContactForm onSubmit={handleSubmit}>
    <StyledLabel>
        <StyledSpan>Name</StyledSpan>
        <StyledInput
            value={name}
            onChange={onNameChange}
            type="text"
            name="name"
            placeholder="Your name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
    </StyledLabel>
    <StyledLabel>
        <StyledSpan>Number</StyledSpan>
        <StyledInput
            value={number}
            onChange={onNumberChange}
            type="tel"
            name="number"
            placeholder="Your number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
    </StyledLabel>
    <StyledBtn type='submit'>Add contact</StyledBtn>
</StyledContactForm>
</StyledContactDiv>      
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
