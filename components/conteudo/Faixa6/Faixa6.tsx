import Image from "next/image";

import Container from "../../ui/containers/Container";
// import ButtonPulse from "../../ui/buttons/ButtonPulse";

// import { ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa6Texto,
  Faixa6TextoTitulo,
  Faixa6Titulo,
  Faixa6Wrapper,
  ListaItens,
  ListaItemModelo,
  ListaItemModeloTextos,
  ListaItemModeloTexto,
  ListaItemModeloBackground,
  ListaItemModeloTitulo,
  Faixa6Imagens,
  Faixa6Imagem,
} from "./Styles";
import { Coluna5, Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import { ButtonWrapper } from "../Faixa1/Styles";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

type Props = {
  callForm: () => void
}

function Faixa6({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      size: "100%",
      modelo: "Salão de Beleza<br /><span>6 cadeiras</span>",
      texto: "Faturamento médio<br />R$ 75 mil por mês",
      textColor: "white"
    },
    {
      id: 2,
      fontSize: "18px",
      size: "100%",
      modelo: "Salão de Beleza<br /><span>10 cadeiras</span>",
      texto: "Faturamento médio<br />R$ 110 mil por mês",
      textColor: "white"
    }
  ];

  return (
    <Faixa6Wrapper id="faixa6">
      <Container>
        <Colunas>
          <Coluna5>
            <Faixa6TextoTitulo>
              <Image
                src="/images/faixa7/background-logo.png"
                width="327"
                height="554"
              />
            </Faixa6TextoTitulo>

            <Faixa6Titulo fontColor="primary" margem="0 0 2rem">
              MODELOS DE NEGÓCIO
            </Faixa6Titulo>
            <Faixa6Texto>
              Conheça nossas opções de salão de beleza
            </Faixa6Texto>
            <br />

            <ListaItens>
              {
                listaIcones.map((item) => (
                  <ListaItemModelo key={item.id}>
                    <ListaItemModeloBackground />
                    <ListaItemModeloTextos>
                      <ListaItemModeloTitulo dangerouslySetInnerHTML={{ __html: item.modelo }} />
                      <ListaItemModeloTexto dangerouslySetInnerHTML={{ __html: item.texto }} />
                    </ListaItemModeloTextos>
                  </ListaItemModelo>
                ))
              }
            </ListaItens>

            <ButtonWrapper margem="0 0 -3rem">
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>Saiba tudo sobre o negócio</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Coluna5>
          <Coluna7>
            <Faixa6Imagens>
              {
                [1, 2, 3].map((item, index) => (
                  <Faixa6Imagem key={index}>
                    <Image
                      src={`/images/faixa6/foto${item}.jpg`}
                      width="292"
                      height="274"
                    />
                  </Faixa6Imagem>
                ))
              }
            </Faixa6Imagens>
          </Coluna7>
        </Colunas>
      </Container>
    </Faixa6Wrapper>
  );
}

export default Faixa6;
