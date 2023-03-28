import { Minus, Plus } from "phosphor-react";
import { TradicionalExpress } from "../../../../assets/coffees";
import { CounterButton, CounterSpan, CounterWrapper, SubText } from "../../styles";
import { CoffeeNameText, CoffeePriceTag, ImageAndTextWrapper, SelectedCoffeeListItem, TitleWrapper } from "./styles";

export function CoffeeSelected() {
    return (
        <SelectedCoffeeListItem>
            <ImageAndTextWrapper>
                <img src={TradicionalExpress} alt="" />
                <TitleWrapper>
                    <CoffeeNameText>Expresso Tradicional</CoffeeNameText>
                    <CoffeePriceTag>
                        R$ 9,90
                    </CoffeePriceTag>
                </TitleWrapper>
                <CounterWrapper>
                    <CounterButton>
                        <Minus />
                    </CounterButton>
                    <CounterSpan>0</CounterSpan>
                    <CounterButton>
                        <Plus />
                    </CounterButton>
                </CounterWrapper>
            </ImageAndTextWrapper>
        </SelectedCoffeeListItem>
    )
}
