import Image from "next/image";

import Container from "../../ui/containers/Container";
import { Coluna4, Colunas } from "@/components/ui/colunas/Colunas";

import { ButtonWrapper, Faixa1Textos } from "../Faixa1/Styles";
import {
  Faixa7TextoImagem,
  Faixa7Texto, Faixa7Titulo, Faixa7Wrapper, Faixa7ListaItens, Faixa7ListaItem, Faixa7ListaItemIcone, Faixa7ListaItemTexto
} from "./Styles";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

type Props = {
  callForm: () => void
}

function Faixa7({ callForm }: Props) {
  const itens = [
    {
      id: 1,
      icone: "/images/faixa7/icone1.png",
      texto: "Balm"
    },
    {
      id: 2,
      icone: "/images/faixa7/icone2.png",
      texto: "Leave-in"
    },
    {
      id: 3,
      icone: "/images/faixa7/icone3.png",
      texto: "Perfume"
    },
    {
      id: 4,
      icone: "/images/faixa7/icone4.png",
      texto: "Shampoo"
    },
    {
      id: 5,
      icone: "/images/faixa7/icone5.png",
      texto: "Condicionador"
    }
  ];

  return (
    <Faixa7Wrapper>
      <Container>
        <Colunas>
          <Coluna4>
            <Faixa1Textos>
              <Faixa7Titulo fontColor="primary" margem="0 0 2rem">
                PRODUTOS DA MARCA
                {" "}
                <br />
                PRÓPRIA ESCOVEI
              </Faixa7Titulo>
              <Faixa7Texto>
                Os mesmos cuidados que o cliente tem na Escovei poderão ser feitos em casa!
              </Faixa7Texto>

              <Faixa7TextoImagem>
                <Image
                  alt="Selo Cruelty Free"
                  src="/images/faixa7/selo-cruelty-free.png"
                  width="247"
                  height="248"
                />
              </Faixa7TextoImagem>

              <Faixa7ListaItens>
                {
                  itens.map((item) => (
                    <Faixa7ListaItem key={item.id}>
                      <Faixa7ListaItemIcone>
                        <Image
                          src={item.icone}
                          width="34"
                          height="34"
                        />
                      </Faixa7ListaItemIcone>

                      <Faixa7ListaItemTexto>
                        {item.texto}
                      </Faixa7ListaItemTexto>
                    </Faixa7ListaItem>
                  ))
                }
              </Faixa7ListaItens>

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>ABRA SUA FRANQUIA ESCOVEI</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa1Textos>
          </Coluna4>
        </Colunas>
      </Container>
    </Faixa7Wrapper>
  );
}

export default Faixa7;
