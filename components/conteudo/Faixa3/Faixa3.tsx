import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import { Coluna2, Coluna5, Colunas } from "@/components/ui/colunas/Colunas";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import {
  Faixa3Conteudo, Faixa3LogoGrupoMagnet, Faixa3Texto, Faixa3Titulo, Faixa3Video, Faixa3Wrapper
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
                A Escovei foi inspirada na Casa de Estilistas da Rússia, com foco em oferecer serviços de alto padrão e qualidade a todos que procuram elevar sua autoestima!
              </Faixa3Texto>
              <Faixa3Texto>
                Nascida de um sonho das sócias, Janaína e Vanessa, a Escovei possui conceito único de atendimento rápido com padrões pré-definidos e preços fixos, em um ambiente leve e relaxante.
              </Faixa3Texto>
              <Faixa3Texto>
                Agora, fazendo parte do Grupo Magnet, estamos em processo de expansão, com a meta de levar beleza e autocuidado para todos os cantos do Brasil!
              </Faixa3Texto>

              <Faixa3LogoGrupoMagnet>
                <Image
                  src="/images/faixa3/logo-grupo-magnet.png"
                  width="284"
                  height="41"
                />
              </Faixa3LogoGrupoMagnet>

              <Faixa3Video>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/T5Px95nuB3Q?t=2s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Faixa3Video>

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
          <Coluna5 />
        </Colunas>
      </Container>
    </Faixa3Wrapper>
  );
}

export default Faixa3;
