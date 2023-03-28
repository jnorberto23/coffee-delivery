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
    width: 11.1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
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
    border:1px solid ${(props) => props.theme["brand-purple"]};
    padding: auto;
    margin: auto;
    outline: none !important;
  }
`;
