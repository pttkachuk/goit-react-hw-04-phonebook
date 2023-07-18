import styled from 'styled-components';

export const StyledContactList = styled.ul`
list-style: none;
margin: 0 auto;
padding: 0;
`;

export const StyledContact = styled.li`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
gap: 20px;
padding-top: 8px;
padding-bottom: 8px;
`;

export const StyledDatas = styled.p`
margin: 0;
padding: 0;
font-weight: 500;
`;

export const StyledListBtn = styled.button`
border: none ;
border-radius: 5px;
padding: 8px 12px;
font-size: 14px;
font-weight: 500;
color: #FF0800;
background-color: transparent;
cursor: pointer;
transition: 0.3s;

&:hover{
    color: white;
    background-color:#FF0800 ;
}
`;