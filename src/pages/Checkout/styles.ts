import styled from "styled-components";

export type spanVariant = "dark-yellow" | "dark-purple" ;
interface SpanProps {
  color: spanVariant;
}

export const FrameWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  justify-content: end;
`;

export const AddressAndPaymentWrapper = styled.div`
  margin: auto;
  padding: auto;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export const AddressCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme["base-card"]};
  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
`;

export const SelectedCoffeeWrapper = styled.div`
  padding: auto;
  flex-basis: 40%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
export const SelectedCoffeeCard = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const TitleText = styled.p`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 130%;
`;

export const MainText = styled.p`
font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
`;

export const SubText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 0.9rem;
`;

export const PaymentCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme["base-card"]};
  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
`;


export const IconAndTextWrapper = styled.div<SpanProps>`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;

svg {
    color: ${(props) => props.theme[props.color]};
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }
`