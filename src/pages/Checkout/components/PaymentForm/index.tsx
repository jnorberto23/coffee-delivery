import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentWrapper, InputWrapper } from "./styles";

export function PaymentForm() {
  const [value, setValue] = 'credit';

  
  const {  } = useContext(SelectedCoffeesContext)
  return (
    <PaymentWrapper>
      <InputWrapper>
        <input type="radio" value="credit" name="radio" onChange={}/>
        <label htmlFor="radio1">  <CreditCard/> Cartão de crédito</label>
      </InputWrapper>
      <InputWrapper>
        <input type="radio" value="debit" name="radio" />
        <label htmlFor="radio2"> <Bank/>cartão de débito</label>
      </InputWrapper>
      <InputWrapper>
        <input type="radio" value="cash" name="radio" />
        <label htmlFor="radio3"> <Money/>dinheiro</label>
      </InputWrapper>
    </PaymentWrapper>
  );
}
