import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CoffeeSelected } from "./components/CoffeeSelected";
import { AddressForm } from "./components/Form";
import { PaymentForm } from "./components/PaymentForm";
import {
  AddressAndPaymentWrapper,
  AddressCard,
  FrameWrapper,
  IconAndTextWrapper,
  MainText,
  PaymentCard,
  SelectedCoffeeCard,
  SelectedCoffeeFooter,
  SelectedCoffeeFooterLineWrapper,
  SelectedCoffeeList,
  SelectedCoffeeWrapper,
  SubText,
  TextWrapper,
  TitleText,
} from "./styles";
export function Checkout() {
  return (
    <FrameWrapper>
      <AddressAndPaymentWrapper>
        <TitleText>Complete seu pedido</TitleText>
        <AddressCard>
          <IconAndTextWrapper color="dark-yellow">
            <MapPinLine />
            <TextWrapper>
              <MainText>Endereço de Entrega</MainText>
              <SubText>
                Informe o endereço onde deseja receber seu pedido
              </SubText>
            </TextWrapper>
          </IconAndTextWrapper>
          <AddressForm />
        </AddressCard>
        <PaymentCard>
          <IconAndTextWrapper color="brand-purple">
            <CurrencyDollar />
            <TextWrapper>
              <MainText>Pagamento</MainText>
              <SubText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SubText>
            </TextWrapper>
          </IconAndTextWrapper>
          <PaymentForm />
        </PaymentCard>
      </AddressAndPaymentWrapper>
      <SelectedCoffeeWrapper>
        <TitleText>Cafés selecionados</TitleText>
        <SelectedCoffeeCard>
          <SelectedCoffeeList>
            <CoffeeSelected></CoffeeSelected>
            <CoffeeSelected></CoffeeSelected>
            <CoffeeSelected></CoffeeSelected>
            <CoffeeSelected></CoffeeSelected>
            <CoffeeSelected></CoffeeSelected>
          </SelectedCoffeeList>
          <SelectedCoffeeFooter>
            <SelectedCoffeeFooterLineWrapper>
            <SubText>Total de itens</SubText>
            <SubText>R$ 29,70</SubText>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
            <SubText>Entrega</SubText>
            <SubText>R$ 3,50</SubText>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
            <TitleText>Total</TitleText>
            <TitleText>R$ 33,20</TitleText>
            </SelectedCoffeeFooterLineWrapper>
          </SelectedCoffeeFooter>
        </SelectedCoffeeCard>
      </SelectedCoffeeWrapper>
    </FrameWrapper>
  );
}
