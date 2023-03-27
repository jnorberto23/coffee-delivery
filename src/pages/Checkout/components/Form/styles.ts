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
height: 2.5rem;
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
width: 30%;
`

export const NumberAndComplementWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
flex-wrap: wrap;

input:first-child{
    width: 30%;
}
input:last-child{
    width: 60%
}
`
export const CityAndStateWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
flex-wrap: wrap;

input:first-child{
    width: 30%;
}
input:nth-child(2){
    width: 50%;
}
input:last-child{
    width: 10%
}
`