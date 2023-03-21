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
  CoffeeList,
  CoffeeListText,
  CoffeeCard,
  CoffeeCardTagWrapper,
  CoffeeCardTag,
  CoffeeCardMainText,
  CoffeeCardSubText,
  CoffeeCardFooterWrapper,
  CoffeeCardFooterPrice,
  CoffeeCardFooterCounterWrapper,
  CoffeeCardFooterCounterButton,
  CoffeeCardFooterCounterSpan,
} from "./styles";
import LandingImage from "../../assets/landing-image.png";
import { Fragment } from "react";
import { TradicionalExpress } from "../../assets/coffees";

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
        <CoffeeCard>
          <img src={TradicionalExpress} alt="" />
          <CoffeeCardTagWrapper>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          </CoffeeCardTagWrapper>
        </CoffeeCard>
        <CoffeeCard>
          <img src={TradicionalExpress} alt="" />
          <CoffeeCardTagWrapper>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          </CoffeeCardTagWrapper>
          <CoffeeCardMainText>Expresso Tradicional</CoffeeCardMainText>
          <CoffeeCardSubText>Expresso diluído, menos intenso que o tradicional</CoffeeCardSubText>
          <CoffeeCardFooterWrapper>
            <CoffeeCardFooterPrice>
              R$ 9,99
            </CoffeeCardFooterPrice>
           <CoffeeCardFooterCounterWrapper>
            <CoffeeCardFooterCounterButton>-</CoffeeCardFooterCounterButton>
            <CoffeeCardFooterCounterSpan>0</CoffeeCardFooterCounterSpan>
            <CoffeeCardFooterCounterButton>+</CoffeeCardFooterCounterButton>
           </CoffeeCardFooterCounterWrapper>
          </CoffeeCardFooterWrapper>
        </CoffeeCard>
        <CoffeeCard>
          <img src={TradicionalExpress} alt="" />
          <CoffeeCardTagWrapper>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
            <CoffeeCardTag>COM LEITE</CoffeeCardTag>
          </CoffeeCardTagWrapper>
        </CoffeeCard>
        <CoffeeCard>
          <img src={TradicionalExpress} alt="" />
          <CoffeeCardTagWrapper>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          </CoffeeCardTagWrapper>
        </CoffeeCard>
        <CoffeeCard>
          <img src={TradicionalExpress} alt="" />
          <CoffeeCardTagWrapper>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          </CoffeeCardTagWrapper>
        </CoffeeCard>
      </CoffeeList>
    </Fragment>
  );
}
