import { Fragment, useContext } from "react";
import {
  ImageWrapper,
  InfoImageWrapper,
  InfoItem,
  InfoItemSpan,
  InfoWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";


import Illustration from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { SelectedCoffeesContext } from "../../context/SelectedCoffeesContext";
export function Success() {
  const { coffees, totalPrice, count, address, paymentForm} = useContext(SelectedCoffeesContext);
  return (
    <Fragment>
      <Wrapper>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
        <InfoImageWrapper>
          <InfoWrapper>
            <InfoItem >
              <InfoItemSpan color="brand-purple">
              <MapPin weight="fill"/>
              </InfoItemSpan>
              <p>Entrega em <b>{ address?.address}, {address?.number}</b><br/>{address?.neighborhood} - {address?.city}, {address?.state}</p>
            </InfoItem>
            <InfoItem >
              <InfoItemSpan color="brand-yellow">
              <Timer weight="fill"/>
              </InfoItemSpan>
              <p>Previsão de entrega<br/><b>20 min - 30 min</b></p>
            
            </InfoItem>
            <InfoItem >
              <InfoItemSpan color="dark-yellow">
              <CurrencyDollar weight="fill"/>
              </InfoItemSpan>
              <p>Pagamento na entrega<br/><b>{paymentForm}</b></p>
            </InfoItem>
          </InfoWrapper>
        <ImageWrapper src={Illustration} alt="" />
        </InfoImageWrapper>
      </Wrapper>
    </Fragment>
  );
}
