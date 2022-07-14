import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';

import Container from '@/components/ui/containers/Container';
import Title from '@/components/ui/tipografia/Title';
import FormularioContinue from '@/components/formulario/FormularioContinue';

import { FaixaTextos, FaixaWrapperSimples } from '@/components/ui/faixas/FaixaStyles';

import { tags } from '@/helpers/dados';
import { getSessao } from '@/helpers/session';
import { Coluna3, Coluna6, Colunas } from '@/components/ui/colunas/Colunas';
import { ModeloContainer } from '@/components/conteudo/Faixa1/Styles';
import Header from '@/components/layout/Header';

const FaixaWrapperSucesso = styled(FaixaWrapperSimples)`
background:url("/images/background-sucesso.jpg") no-repeat;
background-position:70% center;
background-size:cover;
display:flex;
flex-direction:column;
padding:0 0 5rem;

@media (max-width:900px) {
  background-position:center center;
}
`;

const FaixaTextoSucesso = styled(FaixaTextos)`
margin: 0 auto;
max-width: 900px;
position: relative;
`;

const FaixaSucessoModeloContainer = styled(ModeloContainer)`
bottom:-0.6rem;
left:80%;
width:438px;

@media (max-width: 900px) {
  left:100%;
  transform:translate(-80%);
  width:280px;
}
@media (max-width: 768px) {
  display:none;
}
`;

const TitleSucesso = styled(Title)`
color: ${(props) => props.theme.client.colors.terciary};
font-size:30px;
font-weight: 400;
text-align: center;
text-transform: uppercase;

span {
  color: ${(props) => props.theme.client.colors.terciary};
}
`;

const TextoSucesso = styled.p`
color:black;
margin: 0 auto 30px;
max-width: 900px;
position: relative;
`;

function Continue() {
  const [leadNome, setNome] = useState<string>();

  useEffect(() => {
    async function buscaSession() {
      const session = await getSessao();

      if (session) {
        setNome(session.lead_body.nome);
      }
    }

    buscaSession();
  }, []);

  return (
    <>
      <Head>
        <title>{tags.title}</title>
        <meta name="description" content={tags.description} />
        <meta name="keywords" content={tags.keyWords} />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${tags.url}/static/img/og.png`} />
        <meta property="og:title" content={tags.title} />
        <meta property="og:description" content={tags.description} />
        <meta property="og:url" content={tags.url} />
      </Head>

      <FaixaWrapperSucesso>
        <Header home={false} />

        <Container>
          <FaixaSucessoModeloContainer>
            <Image
              src="/images/faixa1/modelo.png"
              alt="Modelo"
              width="438"
              height="679"
            />
          </FaixaSucessoModeloContainer>
          <Colunas>
            <Coluna3 />
            <Coluna6>
              <FaixaTextoSucesso>
                <br />
                <br />
                <TitleSucesso fontColor="primary" margem="0 0 2rem">
                  <strong>
                    Falta pouco,
                    {" "}
                    <span>{leadNome ? leadNome.split(" ")[0] : ""}</span>!
                  </strong>
                </TitleSucesso>
                <TextoSucesso>
                  Você está mais perto de ter seu
                  {" "}
                  <br />
                  próprio negócio!  Conclua o cadastro
                  {" "}
                  <br />
                  para receber a apresentação:
                </TextoSucesso>

                <FormularioContinue />
              </FaixaTextoSucesso>
            </Coluna6>
            <Coluna3 />
          </Colunas>
        </Container>
      </FaixaWrapperSucesso>
    </>
  );
}

export default Continue;
