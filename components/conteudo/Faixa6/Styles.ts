import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { Coluna5, Coluna7, Colunas } from "@/components/ui/colunas/Colunas";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";
import { ButtonWrapper } from "../Faixa1/Styles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
margin-top:-3px;
padding-bottom:0;
padding-top:5rem;
position:relative;
z-index:1;

${Colunas} {
  @media (max-width:1200px) {
    flex-wrap:wrap;
  }
}
${Coluna5} {
  @media (max-width:1200px) {
    width:100%;
  }
}
${Coluna7} {
  @media (max-width:1200px) {
    width:100%;
  }
}
`;

export const Faixa6TextoTitulo = styled.div`
left:0;
position:absolute;
top:50%;
width:327px;

@media (max-width:1200px) {
  top:100%;
  transform:translate(0, -50%);
  width:130px;
}
`;

export const Faixa6Titulo = styled(Title)`
font-size:35px;
font-weight:bold;
text-transform:uppercase;

@media (max-width: 900px) {
  text-align:center;
}
@media (max-width: 600px) {
  font-size:22px;
}
`;

export const Faixa6Texto = styled.p`
color:black;
font-size:16px;
line-height:1.2;
margin-bottom:15px;

strong {
  font-weight:900;
}
@media (max-width:900px) {
  text-align:center;
}
@media (max-width:600px) {
  font-size:25px;
  br {
    display:none;
  }
}
`;

export const ListaItens = styled.div`
display:flex;
gap:5rem;
margin-bottom:5rem;

@media (max-width:900px) {
  justify-content:center;
}
@media (max-width:600px) {
  flex-wrap:wrap;
}
`;

export const ListaItemModelo = styled.div`
display:flex;
flex-direction:column;
height:200px;
position:relative;
width:200px;

@media (max-width:600px) {
  margin:auto;
}
`;

export const ListaItemModeloBackground = styled.div`
background-color:${(props) => props.theme.client.colors.primary};
height:200px;
margin-left:2rem;
margin-top:2rem;
position:absolute;
width:200px;
z-index:1;
`;

export const ListaItemModeloTextos = styled.div`
align-items:center;
background-color:${(props) => props.theme.client.colors.secondary};
display:flex;
flex-direction:column;
height:200px;
justify-content:center;
position:relative;
width:200px;
z-index:2;
`;

export const ListaItemModeloTitulo = styled.p`
color:white;
font-size:18px;
margin-bottom:2rem;
text-align:center;

span {
  color:${(props) => props.theme.client.colors.primary};
}
`;

export const ListaItemModeloTexto = styled.p`
color:white;
font-size:12px;
text-align:center;
`;

export const Faixa6ButtonWrapper = styled(ButtonWrapper)`
margin:0 0 -3rem;

@media (max-width:1200px) {
  margin:0 0 3rem;
}
`;

export const Faixa6Imagens = styled.div`
display:flex;
gap:2rem;
margin-left:5rem;
width:calc(292px * 3 + 4rem);

@media (max-width:1200px) {
  margin-bottom:10rem;
  margin-left:0;
  width:100%;
}
`;

export const Faixa6Imagem = styled.div`
width:292px;

@media (max-width:1200px) {
  width:100%;
}
`;
