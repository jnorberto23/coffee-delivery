import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CoffeeSelected } from "./components/CoffeeSelected";
import { AddressForm } from "./components/Form";
import { PaymentForm } from "./components/PaymentForm";
import {
  AddressAndPaymentWrapper,
  AddressCard,
  ConfirmOrderButton,
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
          </SelectedCoffeeList>
          <SelectedCoffeeFooter>
            <SelectedCoffeeFooterLineWrapper>
              <p>Total de itens</p>
              <p>R$ 29.70</p>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
              <p>Total</p>
              <p>R$ 33,20</p>
            </SelectedCoffeeFooterLineWrapper>
            <ConfirmOrderButton to={"/"}>Confirmar Pedido</ConfirmOrderButton>
          </SelectedCoffeeFooter>
        </SelectedCoffeeCard>
      </SelectedCoffeeWrapper>
    </FrameWrapper>
  );
}
