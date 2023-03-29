import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme["dark-yellow"]};
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
`;

export const SubTitle = styled.h1`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 130%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  border: 5px solid;
  border-image: linear-gradient(45deg, purple, orange) 1;

`;