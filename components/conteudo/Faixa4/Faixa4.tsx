import Image from "next/image";
import Container from "@/components/ui/containers/Container";

import {
  Faixa4Conteudo, Faixa4ListaItem, Faixa4ListaItemIcone, Faixa4ListaItens, Faixa4Texto, Faixa4Wrapper
} from "./Styles";
import { ButtonWrapper } from "../Faixa1/Styles";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";
import { Coluna2, Coluna5, Colunas } from "@/components/ui/colunas/Colunas";

type Props = {
  callForm: () => void
}

function Faixa4({ callForm }: Props) {
  return (
    <Faixa4Wrapper>
      <Container>
        <Colunas>
          <Coluna2 />
          <Coluna5>
            <Faixa4Conteudo>
              <Faixa4Texto onClick={() => callForm()}>
                TENHA
                {" "}
                <br />
                <span>
                  2 POSSIBILIDADES
                  {" "}
                  <br />
                  DE GANHO
                </span>
                {" "}
                <br />
                COM SEU SALÃO:
              </Faixa4Texto>
              <br />

              <Faixa4ListaItens>
                <Faixa4ListaItem>
                  <Faixa4ListaItemIcone>
                    <Image
                      src="/images/faixa4/icone1.png"
                      width="96"
                      height="61"
                    />
                  </Faixa4ListaItemIcone>
                  <span>
                    SERVIÇOS
                    {" "}
                    <br />
                    DE BELEZA
                    {" "}
                    <br />
                    EXPRESS
                  </span>
                </Faixa4ListaItem>
                <Faixa4ListaItem>
                  <Faixa4ListaItemIcone>
                    <Image
                      src="/images/faixa4/icone2.png"
                      width="61"
                      height="65"
                    />
                  </Faixa4ListaItemIcone>
                  <span>
                    VENDA DE
                    {" "}
                    <br />
                    PRODUTOS
                    {" "}
                    <br />
                    DA MARCA
                    {" "}
                    <br />
                    ESCOVEI
                  </span>
                </Faixa4ListaItem>
              </Faixa4ListaItens>

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>LUCRE COM SEU PRÓPRIO SALÃO DE BELEZA!</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa4Conteudo>
          </Coluna5>
          <Coluna5 />
        </Colunas>
      </Container>
    </Faixa4Wrapper>
  );
}

export default Faixa4;
