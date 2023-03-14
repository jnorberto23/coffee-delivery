import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  LandingContainer,
  LandingItemSpan,
  LandingItem,
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
          <LandingItem>
            <LandingItemSpan>
              <ShoppingCart size={25} weight="fill" />
            </LandingItemSpan>
            Compra simples e segura
          </LandingItem>
          <LandingItem>
            <LandingItemSpan>
              <Package size={25} weight="fill" />
            </LandingItemSpan>
            Embalagem mantém o café intacto
          </LandingItem>

          <LandingItem>
            <LandingItemSpan>
              <Timer size={25} weight="fill" />
            </LandingItemSpan>
            Entrega rápida e rastreada
          </LandingItem>

          <LandingItem>
            <LandingItemSpan>
              <Coffee size={25} weight="fill" />
            </LandingItemSpan>
            O café chega fresquinho até você
          </LandingItem>
        </LandingItensWrapper>
      </LandingTextWrapper>
      <LandingTextWrapper />
    </LandingContainer>
  );
}
