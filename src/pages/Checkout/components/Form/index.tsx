import { useFormContext } from "react-hook-form";
import {
  AddressFormInput,
  AddressFormItem,
  AddressFormSelect,
  CityAndStateWrapper,
  NumberAndComplementWrapper,
} from "./styles";

export function AddressForm(props: {handleSubmit: Function}) {
  const { register } = useFormContext();
  const states = [
    "MG",
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <AddressFormItem onSubmit={props.handleSubmit()}>
      <AddressFormInput placeholder="CEP" id="cep" {...register("cep")} />
      <AddressFormInput
        placeholder="Rua"
        id="address"
        {...register("address")}
      />
      <NumberAndComplementWrapper>
        <AddressFormInput
          placeholder="Número"
          id="number"
          {...register("number")}
        />
        <AddressFormInput
          placeholder="Complemento"
          id="complement"
          {...register("complement")}
        />
      </NumberAndComplementWrapper>
      <CityAndStateWrapper>
        <AddressFormInput
          placeholder="Bairro"
          id="neighborhood"
          {...register("neighborhood")}
        />
        <AddressFormInput
          placeholder="Cidade"
          id="city"
          {...register("city")}
        />
        <AddressFormSelect placeholder="SP" id="state" {...register("state")}>
          {states.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </AddressFormSelect>
      </CityAndStateWrapper>
    </AddressFormItem>
  );
}
