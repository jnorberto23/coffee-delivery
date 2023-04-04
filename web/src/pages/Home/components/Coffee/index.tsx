import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { TradicionalExpress } from "../../../../assets/coffees"
import { CoffeeCard, 
    CoffeeCardFooterButtonCart,
     CoffeeCardFooterCounterButton,
      CoffeeCardFooterCounterSpan, 
      CoffeeCardFooterCounterWrapper, 
      CoffeeCardFooterPrice,
       CoffeeCardFooterWrapper,
        CoffeeCardMainText,
        CoffeeCardSubText, 
        CoffeeCardTag, 
        CoffeeCardTagWrapper 
    } from "./styles"

export function CoffeeItem(props: any){
    return (
        <CoffeeCard>
            <img src={TradicionalExpress} alt="" />
            <CoffeeCardTagWrapper>
                <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
            </CoffeeCardTagWrapper>
            <CoffeeCardMainText>Expresso Tradicional</CoffeeCardMainText>
            <CoffeeCardSubText>
                Expresso diluído, menos intenso que o tradicional
            </CoffeeCardSubText>
            <CoffeeCardFooterWrapper>
                <CoffeeCardFooterPrice>R$ 9,99</CoffeeCardFooterPrice>
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
    )

}