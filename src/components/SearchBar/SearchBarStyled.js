import styled from 'styled-components';

export const StyledSearchDiv = styled.div`
border: none;
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledSearchLabel = styled.label`
display: flex;
  flex-direction: column;
`;

export const StyledSearchSpan = styled.span`
font-style: italic;
font-size: 20px;
font-weight: 500;
text-align: center;
margin-bottom: 5px;
`;

export const StyledSearchInput = styled.input`
  max-width: 100%;
  min-width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;