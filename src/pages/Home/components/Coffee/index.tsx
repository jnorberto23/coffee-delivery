import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { TradicionalExpress } from "../../../../assets/coffees";
import {
  CoffeeCard,
  CoffeeCardFooterButtonCart,
  CoffeeCardFooterCounterButton,
  CoffeeCardFooterCounterSpan,
  CoffeeCardFooterCounterWrapper,
  CoffeeCardFooterPrice,
  CoffeeCardFooterWrapper,
  CoffeeCardMainText,
  CoffeeCardSubText,
  CoffeeCardTag,
  CoffeeCardTagWrapper,
} from "./styles";

type PropsType = {
  id: string;
  name: string;
  tag: string[];
  description: string;
  price: number;
  image: string;
};

export function CoffeeItem(props: PropsType) {
  return (
    <CoffeeCard>
      <img src={props.image} alt="" />
      <CoffeeCardTagWrapper>
        {props.tag.map((tag) => (
          <CoffeeCardTag>{tag}</CoffeeCardTag>
        ))}
      </CoffeeCardTagWrapper>
      <CoffeeCardMainText>{props.name}</CoffeeCardMainText>
      <CoffeeCardSubText>{props.description}</CoffeeCardSubText>
      <CoffeeCardFooterWrapper>
        <CoffeeCardFooterPrice>R$ {props.price}</CoffeeCardFooterPrice>
        <CoffeeCardFooterCounterWrapper>
          <CoffeeCardFooterCounterButton>
            <Minus />
          </CoffeeCardFooterCounterButton>
          <CoffeeCardFooterCounterSpan>0</CoffeeCardFooterCounterSpan>
          <CoffeeCardFooterCounterButton>
            <Plus />
          </CoffeeCardFooterCounterButton>
        </CoffeeCardFooterCounterWrapper>
        <CoffeeCardFooterButtonCart>
          <ShoppingCartSimple weight="fill" />
        </CoffeeCardFooterButtonCart>
      </CoffeeCardFooterWrapper>
    </CoffeeCard>
  );
}
