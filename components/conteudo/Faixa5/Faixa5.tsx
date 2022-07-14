import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import { Faixa1Textos } from "../Faixa1/Styles";
import {
  ButtonWrapperDesktop,
  Faixa5FormMobile,
  Faixa5Modelo,
  Faixa5Texto,
  Faixa5Titulo, Faixa5Wrapper, ListaItens
} from "./Styles";
import { ListaItem } from "@/components/ui/listas/ListaItem";
import FormularioHome from "@/components/formulario/FormularioHome";
import { Coluna5, Coluna7, Colunas } from "@/components/ui/colunas/Colunas";

type Props = {
  callForm: () => void
}

function Faixa5({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      icone: "/images/faixa5/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      size: "100%",
      texto: "<strong>O Brasil é o 4º mercado mundial de beleza</strong>, ficando atrás apenas dos EUA, do Japão e da China.",
      textColor: "black"
    },
    {
      id: 2,
      fontSize: "18px",
      icone: "/images/faixa5/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      size: "100%",
      texto: "<strong>Setor de Saúde, Beleza e Bem-Estar aumentou em 13,4% o faturamento</strong> entre 2021 e 2022, segundo a ABF.",
      textColor: "black"
    }
  ];

  return (
    <Faixa5Wrapper>
      <Container>
        <Colunas>
          <Coluna7>
            <Faixa1Textos>
              <Faixa5Titulo fontColor="primary" margem="0 0 2rem">
                PARTICIPE DO SUCESSO QUE É O
                {" "}
                <br />
                MERCADO DA BELEZA!
              </Faixa5Titulo>
              <Faixa5Texto>
                O setor de beleza e autocuidado sempre esteve em alta, porém, com a volta dos eventos presenciais, houve um crescimento acelerado pela procura de serviços de beleza!
              </Faixa5Texto>
              <Faixa5Texto>
                Assim, o segmento se tornou um dos mais lucrativos para o empresário brasileiro, com números surpreendentes e posicionamento privilegiado:
              </Faixa5Texto>

              <ListaItens>
                {
                  listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
                }
              </ListaItens>

              <Faixa5FormMobile>
                <FormularioHome />
              </Faixa5FormMobile>

              <ButtonWrapperDesktop margem="0 0 2rem">
                <ButtonPulse
                  backColor="secondary"
                  fontColor="white"
                  backPulse="secondary"
                  onClick={() => callForm()}
                >
                  <span>ABRA SUA FRANQUIA ESCOVEI</span>
                </ButtonPulse>
              </ButtonWrapperDesktop>
            </Faixa1Textos>
          </Coluna7>
          <Coluna5>
            <Faixa5Modelo>
              <Image
                src="/images/faixa5/modelo.png"
                width="387"
                height="394"
              />
            </Faixa5Modelo>
          </Coluna5>
        </Colunas>
      </Container>
    </Faixa5Wrapper>
  );
}

export default Faixa5;
