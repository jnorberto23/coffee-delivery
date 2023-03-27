import {
  AddressFormInput,
  AddressFormItem,
  CityAndStateWrapper,
  NumberAndComplementWrapper,
} from "./styles";

export function AddressForm() {
  return (
    <AddressFormItem>
      <AddressFormInput name="cep" placeholder="CEP" />
      <AddressFormInput name="address" placeholder="Rua"/>
      <NumberAndComplementWrapper>
        <AddressFormInput name="number" placeholder="Número"/>
        <AddressFormInput name="complement" placeholder="Complemento"/>
      </NumberAndComplementWrapper>
      <CityAndStateWrapper>
        <AddressFormInput name="neighborhood" placeholder="Bairro"/>
        <AddressFormInput name="city" placeholder="Cidade"/>
        <AddressFormInput name="state" placeholder="UF"/>
      </CityAndStateWrapper>
    </AddressFormItem>
  );
}
