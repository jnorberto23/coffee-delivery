import {
  Coffee,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import {
  LandingContainer,
  LandingItemSpan,
  LandingItem,
  LandingItensWrapper,
  LandingMainText,
  LandingSubText,
  LandingTextWrapper,
  LandingImageWrapper,
  CoffeeList,
  CoffeeListText,
} from "./styles";
import LandingImage from "../../assets/landing-image.png";
import { Fragment } from "react";
import { CoffeeItem } from "./components/Coffee";

export function Home() {
  return (
    <Fragment>
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

      <CoffeeListText>Nossos cafés</CoffeeListText>

      <CoffeeList>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />

      </CoffeeList>

    </Fragment>
  );
}
