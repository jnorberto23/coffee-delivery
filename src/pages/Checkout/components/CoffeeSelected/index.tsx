import { Minus, Plus, Trash } from "phosphor-react";
import { TradicionalExpress } from "../../../../assets/coffees";

import {
  CoffeeNameText,
  CoffeePriceTag,
  ImageAndTextWrapper,
  SelectedCoffeeListItem,
  TitleAndContentWrapper,
  TitleWrapper,
  CounterButton,
  CounterSpan,
  CounterWrapper,
  RemoveButton,
  CounterAndRemoveButtonWrapper,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { SelectedCoffeesContext } from "../../../../context/SelectedCoffeesContext";

type PropsType = {
  id: string;
  name: string;
  tag?: string[];
  description?: string;
  price: number;
  image: string;
  amount: number
};


export function CoffeeSelected(props: PropsType) {
  const { handleAddCoffeeToCart } = useContext(SelectedCoffeesContext)
  const [counter, setCounter] = useState(props.amount);

  function HandleRemoveCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function HandleAddCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    handleAddCoffeeToCart({...props, amount: counter})
  }, [counter])

  return (
    <SelectedCoffeeListItem>
      <ImageAndTextWrapper>
        <img src={props.image} alt="" />
        <TitleAndContentWrapper>
          <TitleWrapper>
            <CoffeeNameText>{props.name}</CoffeeNameText>
            <CoffeePriceTag>R$ {props.price}</CoffeePriceTag>
          </TitleWrapper>
          <CounterAndRemoveButtonWrapper>
            <CounterWrapper>
              <CounterButton onClick={HandleRemoveCounter}>
                <Minus />
              </CounterButton>
              <CounterSpan>{counter}</CounterSpan>
              <CounterButton onClick={HandleAddCounter}>
                <Plus />
              </CounterButton>
            </CounterWrapper>
            <RemoveButton><Trash size={20} />Remover</RemoveButton>
          </CounterAndRemoveButtonWrapper>
        </TitleAndContentWrapper>
      </ImageAndTextWrapper>
    </SelectedCoffeeListItem>
  );
}
