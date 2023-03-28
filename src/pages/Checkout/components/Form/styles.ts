import styled from "styled-components";

export const AddressFormItem = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
padding-top: 2rem;
width: 100%;

input:nth-child(2){
    width: 92.5%;
}
`
export const AddressFormInput = styled.input`
height: 2.5rem;
display: flex;
background-color: ${(props) => props.theme["base-input"]};
border: 1px solid #E6E5E5;
border-radius: 4px;
order: 0;
padding-left: 0.8rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 130%;
width: 30%;


:hover{
    border: 1px solid ${(props) => props.theme["dark-yellow"]};;
}
:focus{
    border: 1px solid ${(props) => props.theme["dark-yellow"]};;
    outline: none !important;
}

`

export const NumberAndComplementWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
flex-wrap: wrap;
width: 100%;

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
width: 100%;
input:first-child{
    width: 30%;
}
input:nth-child(2){
    width: 45%;
}
input:last-child{
    width: 12%
}
`