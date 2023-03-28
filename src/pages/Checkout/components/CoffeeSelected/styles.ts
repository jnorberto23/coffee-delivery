import styled from "styled-components";

export const SelectedCoffeeListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
  width: 100%;
`;

export const ImageAndTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  img {
    height: 4rem;
    width: 4rem;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: 1;
`;

export const CoffeeNameText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`;

export const CoffeePriceTag = styled.span`  
  font-family: "Baloo 2";
  font-size: 1.2rem;
  font-weight: 900;
`;
