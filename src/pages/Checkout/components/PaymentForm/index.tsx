import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentWrapperLi, PaymentWrapperUl } from "./styles";

export function PaymentForm() {
  return (
    <PaymentWrapperUl>
      <PaymentWrapperLi>
        <input type="radio" value="1" name="radio" id="radio1" />
        <label htmlFor="radio1">  <CreditCard/> Cartão de crédito</label>
      </PaymentWrapperLi>
      <PaymentWrapperLi>
        <input type="radio" value="2" name="radio" id="radio2" />
        <label htmlFor="radio2"> <Bank/>cartão de débito</label>
      </PaymentWrapperLi>
      <PaymentWrapperLi>
        <input type="radio" value="3" name="radio" id="radio3" />
        <label htmlFor="radio3"> <Money/>dinheiro</label>
      </PaymentWrapperLi>
    </PaymentWrapperUl>
  );
}
