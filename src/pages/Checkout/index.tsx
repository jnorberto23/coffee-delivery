import {
  AddressAndPaymentWrapper,
  AddressCard,
  FrameWrapper,
  SelectedCoffeeCard,
  SelectedCoffeeWrapper,
  SubText,
} from "./styles";

export function Checkout() {
  return (
    <FrameWrapper>
      <AddressAndPaymentWrapper>
        <SubText>Complete seu pedido</SubText>
        <AddressCard>

        </AddressCard>
      </AddressAndPaymentWrapper>
      <SelectedCoffeeWrapper>
      <SubText>Cafés selecionados</SubText>
        <SelectedCoffeeCard>
       
        </SelectedCoffeeCard>
      </SelectedCoffeeWrapper>
    </FrameWrapper>
  );
}
