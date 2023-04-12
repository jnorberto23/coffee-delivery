import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentWrapper, InputWrapper } from "./styles";
import { SelectedCoffeesContext } from "../../../../context/SelectedCoffeesContext";
import { useContext } from "react";

export function PaymentForm() {
  const { handleChangePaymentForm, paymentForm } = useContext(SelectedCoffeesContext);

  return (
    <PaymentWrapper>
      <InputWrapper>
        <input
          type="radio"
          value="Crédito"
          name="radio"
          onChange={() => handleChangePaymentForm("Crédito")}
          id="radio1"
          checked={paymentForm === "Crédito"}
        />
        <label htmlFor="radio1">
          <CreditCard /> Cartão de crédito
        </label>
      </InputWrapper>
      <InputWrapper>
        <input
          type="radio"
          value="Débito"
          name="radio"
          onChange={() => handleChangePaymentForm("Débito")}
          id="radio2"
          checked={paymentForm === "Débito"}
        />
        <label htmlFor="radio2">
          <Bank />
          cartão de débito
        </label>
      </InputWrapper>
      <InputWrapper>
        <input
          type="radio"
          value="Dinheiro"
          name="radio"
          onChange={() => handleChangePaymentForm("Dinheiro")}
          id="radio3"
          checked={paymentForm === "Dinheiro"}
        />
        <label htmlFor="radio3">
          <Money />
          dinheiro
        </label>
      </InputWrapper>
    </PaymentWrapper>
  );
}
