import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme["white"]};
  margin:  auto;
  margin-bottom: 1rem;
  padding: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BrandButton = styled(Link)`

`
export const RegionAndCartContainer = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CartButton = styled(Link)`
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

export const CartButtonBadge = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => props.theme["dark-yellow"]};
  border-radius: 50%;
  margin-left: -1.3rem;
  margin-top: -1.8rem;
  color:  ${(props) => props.theme["white"]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 900;
`

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
