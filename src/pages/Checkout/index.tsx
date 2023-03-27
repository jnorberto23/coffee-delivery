import { MapPinLine } from "phosphor-react";
import { AddressForm } from "./components/Form";
import {
  AddressAndPaymentWrapper,
  AddressCard,
  FrameWrapper,
  IconAndTextWrapper,
  MainText,
  SelectedCoffeeCard,
  SelectedCoffeeWrapper,
  SubText,
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
            <div>
              <MainText>Endereço de Entrega</MainText>
              <SubText>
                Informe o endereço onde deseja receber seu pedido
              </SubText>
            </div>
          </IconAndTextWrapper>
          <AddressForm/>
        </AddressCard>
      </AddressAndPaymentWrapper>
      <SelectedCoffeeWrapper>
        <TitleText>Cafés selecionados</TitleText>
        <SelectedCoffeeCard></SelectedCoffeeCard>
      </SelectedCoffeeWrapper>
    </FrameWrapper>
  );
}
