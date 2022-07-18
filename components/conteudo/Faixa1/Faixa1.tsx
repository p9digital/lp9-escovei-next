import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import {
  Faixa1Textos,
  Faixa1Titulo,
  Faixa1Wrapper,
  FaixaConteudoResponsive,
  ModeloContainer,
  Faixa1Quadro,
  Faixa1QuadroBackground,
  Faixa1QuadroTexto
} from "./Styles";

function Faixa1() {
  return (
    <Faixa1Wrapper>
      <Container>
        <ModeloContainer>
          <Image
            src="/images/faixa1/modelo.png"
            alt="Modelo"
            width="438"
            height="679"
          />
        </ModeloContainer>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa1Quadro>
              <Faixa1QuadroBackground />
              <Faixa1QuadroTexto>
                <Faixa1Titulo fontColor="white" margem="0 0 2rem">
                  FATURE A PARTIR DE<br /> 1 MILHÃO POR ANO COM SUA ESCOVARIA EXPRESS
                </Faixa1Titulo>
              </Faixa1QuadroTexto>
            </Faixa1Quadro>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa1Wrapper>
  );
}

export default Faixa1;
