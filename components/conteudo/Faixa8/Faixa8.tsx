import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import { Faixa1Textos, ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa8ListaItem,
  Faixa8ListaItemIcone,
  Faixa8ListaItemTexto,
  Faixa8ListaItens,
  Faixa8Produtos, Faixa8Texto, Faixa8Titulo, Faixa8Wrapper, ListaImagemItem, ListaImagens
} from "./Styles";
import { Coluna6, Colunas } from "@/components/ui/colunas/Colunas";

type Props = {
  callForm: () => void
}

function Faixa8({ callForm }: Props) {
  const itens = [
    {
      id: 1,
      icone: "/images/faixa8/icone1.png",
      texto: "Escova"
    },
    {
      id: 2,
      icone: "/images/faixa8/icone2.png",
      texto: "Penteado"
    },
    {
      id: 3,
      icone: "/images/faixa8/icone3.png",
      texto: "Maquiagem"
    },
  ];

  return (
    <Faixa8Wrapper>
      <Container>
        <Colunas>
          <Coluna6>
            <Faixa1Textos>
              <Faixa8Titulo fontColor="primary" margem="0 0 2rem">
                SERVIÇOS DE BELEZA
              </Faixa8Titulo>
              <Faixa8Texto>
                Atendimento rápido com qualidade e padrão de excelência, sem precisar marcar horário
              </Faixa8Texto>
              <Faixa8Texto>
                Tenha altos fluxos de clientes em seu salão, oferecendo os mais procurados serviços de beleza:
              </Faixa8Texto>

              <Faixa8ListaItens>
                {
                  itens.map((item) => (
                    <Faixa8ListaItem key={item.id}>
                      <Faixa8ListaItemIcone>
                        <Image
                          src={item.icone}
                          width="34"
                          height="34"
                        />
                      </Faixa8ListaItemIcone>

                      <Faixa8ListaItemTexto>
                        {item.texto}
                      </Faixa8ListaItemTexto>
                    </Faixa8ListaItem>
                  ))
                }
              </Faixa8ListaItens>

            </Faixa1Textos>
          </Coluna6>
          <Coluna6>
            <Faixa8Produtos>
              <Image
                alt="Produtos"
                src="/images/faixa8/background-produtos.png"
                width="711"
                height="617"
              />
            </Faixa8Produtos>
          </Coluna6>
        </Colunas>

        <ListaImagens>
          {
            [1, 2, 3].map((item, index) => (
              <ListaImagemItem>
                <Image
                  key={index}
                  src={`/images/faixa8/foto${item}.jpg`}
                  width="488"
                  height="429"
                />
              </ListaImagemItem>
            ))
          }
        </ListaImagens>

        <Colunas>
          <Coluna6>
            <Faixa1Textos>
              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>Lucre alto com sua franquia!</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa1Textos>
          </Coluna6>
        </Colunas>
      </Container>
    </Faixa8Wrapper>
  );
}

export default Faixa8;
