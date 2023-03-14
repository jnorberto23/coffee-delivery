import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  LandingContainer,
  LandingItemSpan,
  LandingItem,
  LandingItensWrapper,
  LandingMainText,
  LandingSubText,
  LandingTextWrapper,
  LandingImageWrapper,
} from "./styles";
import LandingImage from '../../assets/landing-image.png'

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
            <LandingItemSpan color="dark-yellow">
              <ShoppingCart size={25} weight="fill" />
            </LandingItemSpan>
            Compra simples e segura
          </LandingItem>
          <LandingItem>
            <LandingItemSpan color="grey">
              <Package size={25} weight="fill" />
            </LandingItemSpan>
            Embalagem mantém o café intacto
          </LandingItem>

          <LandingItem>
            <LandingItemSpan color="mid-yellow">
              <Timer size={25} weight="fill" />
            </LandingItemSpan>
            Entrega rápida e rastreada
          </LandingItem>

          <LandingItem>
            <LandingItemSpan color="dark-purple">
              <Coffee size={25} weight="fill" />
            </LandingItemSpan>
            O café chega fresquinho até você
          </LandingItem>
        </LandingItensWrapper>
      </LandingTextWrapper>
      <LandingImageWrapper>
        <img src={LandingImage} alt="" />
      </LandingImageWrapper>
    </LandingContainer>
  );
}
