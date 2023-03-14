import {
  LandingContainer,
  LandingMainText,
  LandingSubText,
  LandingTextWrapper,
} from "./styles";

export function Home() {
  return (
    <LandingContainer>
      <LandingTextWrapper>
        <LandingMainText>
          Encontre o café perfeito para qualquer hora do dia
        </LandingMainText>
        <LandingSubText>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </LandingSubText>
      </LandingTextWrapper>
      <LandingTextWrapper />
    </LandingContainer>
  );
}
