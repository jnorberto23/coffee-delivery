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
import { useContext, useState } from "react";
import { SelectedCoffeesContext, SelectedCoffeesContextProvider } from "../../../../context/SelectedCoffeesContext";

type PropsType = {
  id: string;
  name: string;
  tag: string[];
  description: string;
  price: number;
  image: string;
};

export function CoffeeItem(props: PropsType) {
  const { addCoffeeToCart, coffees } = useContext(SelectedCoffeesContext)
  const [counter, setCounter] = useState(0);

  function HandleRemoveCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function HandleAddCounter() {
    setCounter(counter + 1);
  }

  function HandleAddToCart() {
    addCoffeeToCart({...props, amount: counter})
    console.log('coffees', coffees)
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
        <CoffeeCardFooterButtonCart onClick={HandleAddToCart}>
          <ShoppingCartSimple weight="fill" />
        </CoffeeCardFooterButtonCart>
      </CoffeeCardFooterWrapper>
    </CoffeeCard>
  );
}
