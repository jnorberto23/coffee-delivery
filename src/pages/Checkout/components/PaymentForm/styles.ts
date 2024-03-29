import styled from "styled-components";

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.7rem;
`;

export const InputWrapper = styled.div`  
  input {
    padding: auto;
    visibility: hidden;
  }

  label {
    display: inline-block;
    width: 11.5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    padding: auto;
    margin: auto;
    gap: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 1rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["light-grey"]};
    svg{
        font-size: 0.9rem;
        color: ${(props) => props.theme["brand-purple"]}
    }
  }

  input:checked + label {
    background-color: ${(props) => props.theme["light-purple"]};
    border:1px solid ${(props) => props.theme["brand-purple"]};
    padding: auto;
    margin: auto;
    outline: none !important;
  }
`;
