import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
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
import { useState } from "react";

type PropsType = {
  id: string;
  name: string;
  tag: string[];
  description: string;
  price: number;
  image: string;
};

export function CoffeeItem(props: PropsType) {
  const [counter, setCounter] = useState(0);
  function HandleRemoveCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function HandleAddCounter() {
    setCounter(counter + 1);
  }
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
          <CoffeeCardFooterCounterButton onClick={HandleRemoveCounter}>
            <Minus />
          </CoffeeCardFooterCounterButton>
          <CoffeeCardFooterCounterSpan>{counter}</CoffeeCardFooterCounterSpan>
          <CoffeeCardFooterCounterButton onClick={HandleAddCounter}>
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
