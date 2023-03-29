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

export function CoffeeSelected() {
  return (
    <SelectedCoffeeListItem>
      <ImageAndTextWrapper>
        <img src={TradicionalExpress} alt="" />
        <TitleAndContentWrapper>
          <TitleWrapper>
            <CoffeeNameText>Expresso Tradicional</CoffeeNameText>
            <CoffeePriceTag>R$ 9,90</CoffeePriceTag>
          </TitleWrapper>
          <CounterAndRemoveButtonWrapper>
            <CounterWrapper>
              <CounterButton>
                <Minus />
              </CounterButton>
              <CounterSpan>0</CounterSpan>
              <CounterButton>
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
