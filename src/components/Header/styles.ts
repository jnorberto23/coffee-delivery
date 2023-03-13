import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme["white"]};
  margin: auto;
  padding: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const RegionAndCartContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const CartButton = styled.button`
  padding: auto;
  margin: auto;
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.theme["yellow-100"]};
  border: 1px solid ${(props) => props.theme["yellow-900"]};
  border-radius: 10px;

  svg{
    color:${(props) => props.theme["yellow-900"]};
  }
`;

export const RegionSpan = styled.span`
  background-color: ${(props) => props.theme["purple-100"]};
  border: 1px solid ${(props) => props.theme["purple-900"]};
  color:  ${(props) => props.theme["purple-900"]};
  border-radius: 10px;

  svg{
    color:${(props) => props.theme["pink"]};
  }
`;

