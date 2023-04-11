import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CoffeeSelected } from "./components/CoffeeSelected";
import { AddressForm } from "./components/Form";
import { PaymentForm } from "./components/PaymentForm";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod";
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
import { useContext } from "react";
import { SelectedCoffeesContext } from "../../context/SelectedCoffeesContext";
import { FormProvider, useForm } from "react-hook-form";
export function Checkout() {
  const { coffees, totalPrice, count } = useContext(SelectedCoffeesContext);
  const freightPrice = 3.5;

  const isButtonDisabled = count === 0;

  const newAddressFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o cep"),
    address: zod
      .string()
      .min(5, "O endereço precisa ter no mínimo 5 caracteres."),
    number: zod.string().min(1, "O número precisa ter no mínimo 1 caracteres."),
    complement: zod.string().optional(),
    neighborhood: zod
      .string()
      .min(5, "O bairro precisa ter no mínimo 2 caracteres."),
    city: zod.string().min(5, "A cidade precisa ter no mínimo 2 caracteres."),
  });

  type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

  const newAddressForm = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
    address:'',
    number: '',
    complement:'',
    neighborhood:'',
    city: '',
    },
  })

  function handleCreateNewAddress(data: newAddressFormData) {
    console.log('data' , data)
  }
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
          <FormProvider  {...newAddressForm} >
            <AddressForm/>
          </FormProvider>
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
          <PaymentForm/>
        </PaymentCard>
      </AddressAndPaymentWrapper>
      <SelectedCoffeeWrapper>
        <TitleText>Cafés selecionados</TitleText>
        <SelectedCoffeeCard>
          <SelectedCoffeeList>
            {coffees.map((coffee) => {
              return (
                <CoffeeSelected
                  key={coffee.id}
                  id={coffee.id}
                  price={coffee.price}
                  name={coffee.name}
                  image={coffee.image}
                  amount={coffee.amount}
                />
              );
            })}
          </SelectedCoffeeList>
          <SelectedCoffeeFooter>
            <SelectedCoffeeFooterLineWrapper>
              <p>Total de itens</p>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
              <p>Entrega</p>
              <p>R$ {freightPrice.toFixed(2)}</p>
            </SelectedCoffeeFooterLineWrapper>
            <SelectedCoffeeFooterLineWrapper>
              <p>Total</p>
              <p>R$ {(totalPrice + freightPrice).toFixed(2)}</p>
            </SelectedCoffeeFooterLineWrapper>
            <ConfirmOrderButton  isDisabled={isButtonDisabled}>
              Confirmar Pedido
            </ConfirmOrderButton>
          </SelectedCoffeeFooter>
        </SelectedCoffeeCard>
      </SelectedCoffeeWrapper>
    </FrameWrapper>
  );
}
