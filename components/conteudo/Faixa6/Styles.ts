import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
margin-top:-3px;
padding-bottom:0;
padding-top:5rem;
position:relative;
z-index:1;
`;

export const Faixa6TextoTitulo = styled.div`
left:0;
position:absolute;
top:50%;
width:327px;
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

@media (max-width:600px) {
  gap:2rem 0;
  grid-template:"grid1"
  "grid2"
  "grid3"
  "grid4";
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

export const Faixa6Imagens = styled.div`
display:flex;
gap:2rem;
margin-left:5rem;
width:calc(292px * 3 + 4rem);
`;

export const Faixa6Imagem = styled.div`
width:292px;
`;
