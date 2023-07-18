import React, { Component } from 'react'
import { StyledBtn, StyledContactDiv, StyledContactForm, StyledInput, StyledLabel, StyledSpan } from './ContactFormStyled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

  render() {
      return (
          <StyledContactDiv>
              <StyledContactForm onSubmit={this.handleSubmit}>
            <StyledLabel>
                <StyledSpan>Name</StyledSpan>
                <StyledInput
                    value={this.state.name}
                    onChange={this.onInputChange}
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
                    value={this.state.number}
                    onChange={this.onInputChange}
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
  }
}
