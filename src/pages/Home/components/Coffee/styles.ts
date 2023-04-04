import styled from "styled-components";

export const CoffeeCard = styled.div`
  flex-basis: auto;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-wrap: wrap;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 5px 30px 5px 30px;
  gap: 0.7rem;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  img {
    margin-top: -3rem;
  }
`;
export const CoffeeCardTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const CoffeeCardTag = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 900;
  background: ${(props) => props.theme["light-yellow"]};
  color: ${(props) => props.theme["dark-yellow"]};
  padding: 0.3rem;
  border-radius: 10px;
`;

export const CoffeeCardMainText = styled.b`
  font-family: "Baloo 2";
  font-size: 1.2rem;
  font-weight: 900;
`;

export const CoffeeCardSubText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  font-weight: 400;
  line-height: 130%;
`;

export const CoffeeCardFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const CoffeeCardFooterPrice = styled.span`
  font-family: "Baloo 2";
  font-size: 1.2rem;
  font-weight: 900;
`;

export const CoffeeCardFooterCounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: "center";
`;

export const CoffeeCardFooterCounterButton = styled.button`
  justify-content: "center";
  display: flex;
  flex-direction: row;
  align-items: "center";
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

export const CoffeeCardFooterCounterSpan = styled.span`
  padding: auto;
  margin: auto;
  font-family: "Baloo 2";
  font-weight: 900;
  border: none;
  border-radius: 1px;
  background-color: ${(props) => props.theme["light-grey"]};
`;

export const CoffeeCardFooterButtonCart = styled.button`
 padding: auto;
  margin: auto;
  font-family: "Baloo 2";
  font-size: 1.2rem;
  font-weight: 900;
  width: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) => props.theme["dark-purple"]};
  svg {
    padding: auto;
    margin: auto;
    font-size: 1rem;
    color: ${(props) => props.theme["white"]};
  }
`;