import styled from "styled-components";

export type spanVariant = "dark-yellow" | "brand-yellow" | "brand-purple";
interface SpanProps {
  color: spanVariant;
}

export const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
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
3;
export const InfoImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: auto;
  gap: 5rem;
  padding-top: 2rem;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  padding: auto;

  ::before {
    border-radius: 10px 50px 10px 50px;
    border: 2px solid transparent; 
    background: linear-gradient(45deg, yellow, purple) border-box; /*3*/
    -webkit-mask: /*4*/ linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; 
    mask-composite: exclude; 
    content: "";
    inset: 0;
    position: absolute;
  }
`;

export const ImageWrapper = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34vh;
  margin: auto;
  padding: auto;
`;

export const IconAndTextWrapper = styled.div<SpanProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  color: black;

  svg {
    color: ${(props) => props.theme[props.color]};
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.4rem;
`;
