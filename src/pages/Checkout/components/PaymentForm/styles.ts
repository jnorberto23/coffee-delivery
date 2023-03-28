import styled from "styled-components";

export const PaymentWrapperUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: 1;
  gap: 1rem;
`;

export const PaymentWrapperLi = styled.li`  
  input {
    padding: auto;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: auto;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 16px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["light-grey"]};

    svg{
        font-size: 0.9rem;
    }
  }

  input:checked + label {
    border:1px solid ${(props) => props.theme["dark-purple"]};
    padding: auto;
    margin: auto;
    outline: none !important;
  }
`;
