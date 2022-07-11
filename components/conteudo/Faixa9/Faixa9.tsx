import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import {
  FaixaConteudoResponsive,
  Faixa1Textos,
  ButtonWrapper,
} from "../Faixa1/Styles";
import {
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
            <ButtonWrapper>
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>Conheça mais sobre a Escovei</span>
              </ButtonPulse>
            </ButtonWrapper>
            <br />

            <Faixa9SetaWrapper>
              <Image
                alt="Seta"
                src="/images/seta.png"
                width="304"
                height="166"
              />
            </Faixa9SetaWrapper>

            <Faixa9Titulo fontColor="preto" margem="0 0 2rem">
              SEJA FRANQUEADO(A)
              {" "}
              <br />
              ESCOVEI E TENHA
              {" "}
              <br />
              <span>
                ALTO FATURAMENTO COM O SETOR DE ALIMENTAÇÃO!
              </span>
            </Faixa9Titulo>
            <Faixa9Texto>
              ABRA UMA FRANQUIA ESCOVEI
              {" "}
              <br />
              NA SUA CIDADE!
            </Faixa9Texto>

            <ButtonWrapper>
              <ButtonPulse
                backColor="terciary"
                fontColor="primary"
                backPulse="terciary"
                onClick={() => callForm()}
              >
                <span>Baixe a apresentação de negócio</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa9Wrapper>
  );
}

export default Faixa9;
