import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import {
  Faixa6Texto,
  Faixa6Titulo,
  Faixa6Wrapper,
  ListaItens,
  ListaItemModelo,
  ListaItemModeloHeader,
  ListaItemModeloTextos,
  ListaItemModeloTexto,
  ListaItemModeloTitulo,
  Faixa6Imagens,
  Faixa6Imagem,
  Faixa6ButtonWrapper,
  Faixa6Modelo,
  ListaItemModeloHeaderCadeira,
  ListaItemModeloHeaderCadeiras,
  ListaItemModeloHeaderCadeiraNumero,
  ListaItemModeloHeaderCadeiraTexto,
} from "./Styles";
import { Coluna5, Coluna7, Colunas } from "@/components/ui/colunas/Colunas";

type Props = {
  callForm: () => void
}

function Faixa6({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      size: "100%",
      modelo: "Salão de Beleza",
      cadeiras: {
        imagem: "numero6.png",
        width: 60,
        height: 84
      },
      texto: "R$ 75 mil/mês",
      textColor: "white"
    },
    {
      id: 2,
      fontSize: "18px",
      size: "100%",
      modelo: "Salão de Beleza",
      cadeiras: {
        imagem: "numero10.png",
        width: 107,
        height: 84
      },
      texto: "R$ 100 mil/mês",
      textColor: "white"
    }
  ];

  return (
    <Faixa6Wrapper id="faixa6">
      <Container>
        <Colunas>
          <Coluna5>
            {/* <Faixa6TextoTitulo>
              <Image
                src="/images/faixa7/background-logo.png"
                width="327"
                height="554"
              />
            </Faixa6TextoTitulo> */}

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
                    <ListaItemModeloHeader>
                      <p>{item.modelo}</p>
                      <ListaItemModeloHeaderCadeiras>
                        <ListaItemModeloHeaderCadeira>
                          <Image
                            src="/images/faixa6/cadeira.png"
                            width="70"
                            height="78"
                          />
                        </ListaItemModeloHeaderCadeira>

                        <ListaItemModeloHeaderCadeiraTexto>
                          <ListaItemModeloHeaderCadeiraNumero>
                            <img alt="Cadeira " src={`/images/faixa6/${item.cadeiras.imagem}`} />
                          </ListaItemModeloHeaderCadeiraNumero>

                          <p>cadeiras</p>
                        </ListaItemModeloHeaderCadeiraTexto>
                      </ListaItemModeloHeaderCadeiras>
                    </ListaItemModeloHeader>
                    <ListaItemModeloTextos>
                      <ListaItemModeloTitulo>
                        Faturamento
                        {" "}
                        <br />
                        médio
                      </ListaItemModeloTitulo>
                      <ListaItemModeloTexto dangerouslySetInnerHTML={{ __html: item.texto }} />
                    </ListaItemModeloTextos>
                  </ListaItemModelo>
                ))
              }
            </ListaItens>

            <Faixa6ButtonWrapper>
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>Saiba tudo sobre o negócio</span>
              </ButtonPulse>
            </Faixa6ButtonWrapper>
          </Coluna5>
          <Coluna7>
            <Faixa6Modelo>
              <Image
                src="/images/faixa6/modelo.png"
                width="498"
                height="633"
              />
            </Faixa6Modelo>
          </Coluna7>
        </Colunas>
      </Container>

      <Faixa6Imagens>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <Faixa6Imagem key={index}>
              <Image
                src={`/images/faixa6/foto${item}.jpg`}
                width="309"
                height="290"
              />
            </Faixa6Imagem>
          ))
        }
      </Faixa6Imagens>
    </Faixa6Wrapper>
  );
}

export default Faixa6;
