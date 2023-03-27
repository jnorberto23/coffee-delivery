import styled from "styled-components";

export const AddressFormItem = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
padding-top: 2rem;
`

export const AddressFormInput = styled.input`
height: 2rem;
display: flex;
background-color: ${(props) => props.theme["base-input"]};
background-color: ${(props) => props.theme["light-grey"]};
border: 1px solid #E6E5E5;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
padding-left: 0.8rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 130%;
`

export const NumberAndComplementWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

`
export const CityAndStateWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

`