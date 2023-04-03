import { Fragment } from "react";
import {
  IconAndTextWrapper,
  ImageWrapper,
  InfoImageWrapper,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  Title,
  Wrapper,
} from "./styles";


import Illustration from '../../assets/Illustration.png'
import { MapPin } from "phosphor-react";
export function Success() {
  return (
    <Fragment>
      <Wrapper>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>

        <InfoImageWrapper>
          <InfoWrapper>
            <IconAndTextWrapper color="brand-purple">
              <MapPin weight="fill"/>
              <TextWrapper>Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre, RS</TextWrapper>
            </IconAndTextWrapper>
          </InfoWrapper>
        <ImageWrapper src={Illustration} alt="" />
        </InfoImageWrapper>
      </Wrapper>
    </Fragment>
  );
}
