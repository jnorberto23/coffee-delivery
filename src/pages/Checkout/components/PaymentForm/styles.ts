import styled from "styled-components";

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export const InputWrapper = styled.div`  
  input {
    padding: auto;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 1rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["light-grey"]};
    svg{
        font-size: 0.9rem;
        color: ${(props) => props.theme["dark-purple"]}
    }
  }

  input:checked + label {
    border:1px solid ${(props) => props.theme["dark-purple"]};
    padding: auto;
    margin: auto;
    outline: none !important;
  }
`;
