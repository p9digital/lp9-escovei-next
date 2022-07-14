import Container from "@/components/ui/containers/Container";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import { ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa2Wrapper, Faixa2Texto, Faixa2Titulo, ListaItens
} from "./Styles";
import { Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import { FormMobile } from "@/pages";
import FormularioHome from "@/components/formulario/FormularioHome";
import { ListaItem } from "@/components/ui/listas/ListaItem";

type Props = {
  callForm: () => void
}

function Faixa2({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Investimento a partir de R$ 210 mil"
    },
    {
      id: 2,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Suporte completo ao franqueado"
    },
    {
      id: 3,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Lucre com a venda de produtos de marca própria"
    },
    {
      id: 4,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Alta rotatividade de clientes"
    },
    {
      id: 5,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Preços competitivos e alta procura"
    },
    {
      id: 6,
      icone: "/images/faixa2/icone-check.png",
      iconeSize: { height: "26", width: "26" },
      texto: "Centro de treinamentos específicos para a equipe"
    },
  ];

  return (
    <Faixa2Wrapper id="faixa2">
      <Container>
        <Colunas>
          <Coluna7>
            <FormMobile>
              <FormularioHome />
            </FormMobile>

            <Faixa2Titulo fontColor="white" margem="0 0 2rem">
              Abra sua franquia
              {" "}
              <br />
              de beleza express
              {" "}
              <br />
              da Escovei!
            </Faixa2Titulo>
            <Faixa2Texto>
              Tenha alta lucratividade oferecendo os mais procurados serviços de beleza sem hora marcada e de atendimento rápido!
            </Faixa2Texto>
            <br />

            <ListaItens>
              {
                listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
              }
            </ListaItens>
            <br />

            <ButtonWrapper>
              <ButtonPulse
                backColor="secondary"
                fontColor="white"
                backPulse="secondary"
                onClick={() => callForm()}
              >
                <span>CLIQUE E RECEBA A NOSSA APRESENTAÇÃO</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Coluna7>
        </Colunas>
      </Container>
    </Faixa2Wrapper>
  );
}

export default Faixa2;
