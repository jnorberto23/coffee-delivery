import { ShoppingCart } from "phosphor-react";
import {
  LandingContainer,
  LandingItemCartIcon,
  LandingItemText,
  LandingItensWrapper,
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
        <LandingItensWrapper>
          <LandingItemText>
            <LandingItemCartIcon size={25} weight="fill" />
            Compra simples e segura
          </LandingItemText>
          <LandingItemText>Embalagem mantém o café intacto</LandingItemText>
          <LandingItemText>Compra simples e segura</LandingItemText>
          <LandingItemText>Embalagem mantém o café intacto</LandingItemText>
        </LandingItensWrapper>
      </LandingTextWrapper>
      <LandingTextWrapper />
    </LandingContainer>
  );
}
