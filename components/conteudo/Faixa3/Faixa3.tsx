import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import { Coluna2, Coluna5, Colunas } from "@/components/ui/colunas/Colunas";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import {
  Faixa3Conteudo, Faixa3Logo, Faixa3LogoGrupoMagnet, Faixa3Texto, Faixa3Titulo, Faixa3Wrapper
} from "./Styles";
import { ButtonWrapper } from "../Faixa1/Styles";

type Props = {
  callForm: () => void
}

function Faixa3({ callForm }: Props) {
  return (
    <Faixa3Wrapper>
      <Container>
        <Colunas>
          <Coluna2 />
          <Coluna5>
            <Faixa3Conteudo>
              <Faixa3Titulo fontColor="primary" margem="0 0 2rem">
                CONHEÇA A ESCOVEI!
              </Faixa3Titulo>
              <Faixa3Texto>
                Após conhecerem alguns modelos de negócio diferentes, em viagens à Europa e aos EUA, as empresárias Vanessa e Janaina decidiram que era hora de trazer para o Brasil um serviço diferente do que era, até então, conhecido por aqui.
              </Faixa3Texto>
              <Faixa3Texto>
                A Escovei vem com a missão de atender as clientes com um alto padrão de qualidade em um ambiente leve e relaxante, atendendo com agilidade e excelência, sem hora marcada, e o melhor de tudo, preços fixos para todos os tamanhos de cabelo.
              </Faixa3Texto>

              <Faixa3LogoGrupoMagnet>
                <Image
                  src="/images/logo-grupo-magnet.png"
                  width="284"
                  height="60"
                />
              </Faixa3LogoGrupoMagnet>

              {/* <Faixa3Video>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/T5Px95nuB3Q?t=2s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Faixa3Video> */}

              <ButtonWrapper>
                <ButtonPulse
                  backColor="white"
                  fontColor="black"
                  backPulse="white"
                  onClick={() => callForm()}
                >
                  <span>SEJA UM FRANQUEADO!</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa3Conteudo>
          </Coluna5>
          <Coluna5>
            <Faixa3Logo>
              <Image
                src="/images/faixa3/background-logo.png"
                width="793"
                height="508"
              />
            </Faixa3Logo>
          </Coluna5>
        </Colunas>
      </Container>
    </Faixa3Wrapper>
  );
}

export default Faixa3;
