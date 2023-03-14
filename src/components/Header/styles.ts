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
  gap: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme["light-yellow"]};
  border: none;
  border-radius: 3px;

  svg {
    color: ${(props) => props.theme["dark-yellow"]};
  }
`;

export const RegionSpan = styled.span`
  display: flex;
  align-items: center;
  height: 2.4rem;
  padding: 0.6rem;
  background-color: ${(props) => props.theme["light-purple"]};
  color: ${(props) => props.theme["dark-purple"]};
  border: none;
  border-radius: 3px;
  font-size: 0.9rem;

  svg {
    color: ${(props) => props.theme["pink"]};
  }
`;
