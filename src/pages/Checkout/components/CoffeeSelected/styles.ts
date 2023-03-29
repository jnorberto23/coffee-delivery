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

export const TitleAndContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: 1;`

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

export const CounterAndRemoveButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;  
  width: 100%;
  margin-left: 2.6rem;
  flex-wrap: 1;
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CounterButton = styled.button`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Baloo 2";
  font-weight: 900;
  color: ${(props) => props.theme["pink"]};
  width: 2rem;
  height: auto;
  border: none;
  border-radius: 1px;
  background-color: ${(props) => props.theme["light-grey"]};
 cursor: pointer;
  svg {
    padding: auto;
    margin: auto;
    font-size: 1rem;
  }
`;

export const CounterSpan = styled.span`
  padding: auto;
  margin: auto;
  font-family: "Baloo 2";
  border: none;
  border-radius: 1px;
  background-color: ${(props) => props.theme["light-grey"]};
`;

export const RemoveButton = styled.button`
    display: inline-block;
    width: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    border:none;
    gap: 0.1rem;
    font-size: 0.7rem;
    cursor: pointer;
    padding: 0.2rem 0.3rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["light-grey"]};
    svg{
        font-size: 0.8rem;
        color: ${(props) => props.theme["brand-purple"]}
    }
`;

