import styled from "styled-components";

export type spanVariant = "mid-yellow" | "dark-yellow" | "grey" | "dark-purple";

interface SpanProps {
  color: spanVariant;
}
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-wrap: wrap;
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
  font-weight: 900;
  font-size: 3rem;
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
  align-items: center;
  justify-content: last baseline;
  gap: 1rem;
  margin-top: 20px;
`;

export const LandingItem = styled.p`
  flex-basis: content;
  font-style: normal;
  font-size: 1rem;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const LandingItemSpan = styled.span<SpanProps>`
  display: flex;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[props.color]};
  align-items: center;
  justify-content: center;

  svg {
    height: 1rem;
    width: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["white"]};
  }
`;

export const LandingImageWrapper = styled.div`
  padding: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const CoffeeListText = styled.p`
  font-family: "Baloo 2";
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 1000;
  margin-bottom: 3rem;
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 80vh;
  flex-wrap: wrap;
  gap: 2rem;
`;

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

  background-color: ${(props) => props.theme["dark-purple"]};
  svg {
    padding: auto;
    margin: auto;
    font-size: 1rem;
    color: ${(props) => props.theme["white"]};
  }
`;
