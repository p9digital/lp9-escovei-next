import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import {
  FaixaConteudoResponsive,
  Faixa1Textos,
  ButtonWrapper,
} from "../Faixa1/Styles";
import {
  Faixa9LogoMagnet,
  Faixa9SetaWrapper,
  Faixa9Texto, Faixa9Titulo, Faixa9Wrapper
} from "./Styles";

type Props = {
  callForm: () => void
}

function Faixa9({ callForm }: Props) {
  return (
    <Faixa9Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa9SetaWrapper>
              <Image
                alt="Seta"
                src="/images/seta.png"
                width="304"
                height="166"
              />
            </Faixa9SetaWrapper>

            <Faixa9Titulo fontColor="preto" margem="0 0 2rem">
              <span>
                INVISTA NA SUA FRANQUIA
                {" "}
                <br />
                DE BELEZA EXPRESS
                {" "}
                <br />
                COM ESCOVEI!
              </span>
            </Faixa9Titulo>
            <Faixa9Texto>
              Torne-se empresário(a) de sucesso com um negócio seguro e lucrativo.
            </Faixa9Texto>

            <ButtonWrapper>
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>Baixe a apresentação de negócio</span>
              </ButtonPulse>
            </ButtonWrapper>
            <br />
            <br />

            <Faixa9LogoMagnet>
              <Image
                src="/images/logo-grupo-magnet.png"
                width="284"
                height="60"
              />
            </Faixa9LogoMagnet>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa9Wrapper>
  );
}

export default Faixa9;
