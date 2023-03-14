import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
  /* filter: blur(80px); */
`;

export const LandingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  gap: 1rem;
`;

export const LandingMainText = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 3rem;
`;

export const LandingSubText = styled.p`
  font-style: normal;
  font-size: 1.2rem;
  font-stretch: 100;
  line-height: 2rem;
`;

export const LandingItensWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

`;

export const LandingItem = styled.p`
  flex-basis: 50%;
  font-style: normal;
  font-size: 0.9rem;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const LandingItemSpan = styled.div`
  display: flex;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme["yellow-900"]};
  align-items: center;
  justify-content: center;

  svg {
    height: 1rem;
    width: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["white"]};
  }
`;