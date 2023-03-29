import { Fragment } from "react";
import { SubTitle, Title, Wrapper } from "./styles";

export function Success() {
  return (
    <Fragment>
        <Wrapper>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
        </Wrapper>
     
    </Fragment>
  );
}