import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";
import { ButtonWrapper } from "../Faixa1/Styles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
flex-direction:column;
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
flex-direction:column;
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
height:200px;
max-width:460px;
margin:auto;
position:relative;
width:100%;

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

export const ListaItemModeloHeader = styled.div`
align-items:center;
background-color:${(props) => props.theme.client.colors.secondary};
display:flex;
flex-direction:column;
flex-grow:1;
height:200px;
justify-content:center;
padding:2rem;

& > p {
  color:white;
  margin-bottom:2rem;
}
`;

export const ListaItemModeloHeaderCadeiras = styled.div`
display:flex;
justify-content:space-between;
gap:2rem;
`;

export const ListaItemModeloHeaderCadeira = styled.div`
width:70px;
`;

export const ListaItemModeloHeaderCadeiraTexto = styled.div`
text-align:center;
p {
  color:${(props) => props.theme.client.colors.primary};
}
`;

export const ListaItemModeloHeaderCadeiraNumero = styled.div`
`;

export const ListaItemModeloTextos = styled.div`
align-items:flex-start;
background-color:${(props) => props.theme.client.colors.primary};
display:flex;
flex-direction:column;
flex-grow:1;
height:200px;
justify-content:center;
padding:2rem;
`;

export const ListaItemModeloTitulo = styled.p`
color:white;
font-size:20px;
margin-bottom:2rem;

span {
  color:${(props) => props.theme.client.colors.primary};
}
`;

export const ListaItemModeloTexto = styled.p`
color:white;
font-size:20px;
font-weight:bold;
`;

export const Faixa6ButtonWrapper = styled(ButtonWrapper)`
margin:0 0 3rem;

@media (max-width:1200px) {
  margin:0 0 3rem;
}
`;

export const Faixa6Modelo = styled.div`
width:498px;

@media (max-width:900px) {
  margin:auto;
}
@media (max-width:768px) {
  width:380px;
}
@media (max-width:600px) {
  width:100%;
}
`;

export const Faixa6Imagens = styled.div`
display:flex;
gap:2rem;
justify-content: space-between;
margin:2rem -1rem 1rem;

@media (max-width:992px) {
  flex-wrap:wrap;
  gap:1rem;
}
`;

export const Faixa6Imagem = styled.div`
width:292px;

@media (max-width:992px) {
  width:calc(100% / 3 - 1rem);
}
@media (max-width:420px) {
  width:calc(50% - 1rem);
}
`;
