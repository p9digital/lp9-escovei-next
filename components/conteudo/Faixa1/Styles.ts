import styled from "styled-components";

import Container from "@/components/ui/containers/Container";
import {
  FaixaWrapperSimples,
  FaixaConteudo,
  FaixaTextos,
} from '@/components/ui/faixas/FaixaStyles';
import Title from "@/components/ui/tipografia/Title";

export const Faixa1Wrapper = styled(FaixaWrapperSimples)`
background:url('/images/faixa1/background.jpg') no-repeat center center;
background-size:cover;
flex-wrap:wrap;
margin-bottom:5rem;
padding-bottom:15rem;
padding-top:22rem;

@media (max-width: 900px) {
  padding-top:12rem;
}
@media (max-width: 768px) {
  padding-bottom:8rem;
  padding-top:8rem;
}
@media (max-width: 600px) {
  padding-bottom:15rem;
  padding-top:5rem;
}
`;

export const TopoContainer = styled(Container)`
width: 50%;
position: relative;

@media (max-width: 900px) {
  width: 100%;
}
`;

export const BackgroundLateral = styled.div`
background: url('/images/tmp/quadrado1.png') no-repeat center right;
background-size: cover;
margin: 0 -1rem;
width: calc(50% + 2rem);

@media (max-width: 900px) {
  display: none;
}
`;

export const FaixaConteudoResponsive = styled(FaixaConteudo)`
padding: 0;
position:relative;
z-index:1;
`;

export const ModeloContainer = styled.div`
bottom:-5.6rem;
left:calc(50%);
position:absolute;
transform:translate(-50%);
width:494px;
z-index:2;

@media (max-width: 1200px) {
  transform:translate(-120px);
}
@media (max-width: 900px) {
  transform:translate(1rem);
  width:400px;
}
@media (max-width:768px) {
  transform:translate(10%);
  width:300px;
}
@media (max-width:600px) {
  width:200px;
}
`;

export const LogoContainer = styled.div`
width:334px;

@media (max-width:900px) {
  width:200px;
}
`;

export const Faixa1Quadro = styled.div`
align-items:center;
height:281px;
margin-left:-5rem;
position:relative;
width:407px;

@media (max-width: 1200px) {
  margin-left:-1rem;
}
@media (max-width: 900px) {
  margin-left:-35rem;
}
@media (max-width:768px) {
  height:220px;
  margin-left:-25rem;
  width:307px;
}
@media (max-width:600px) {
  margin-left:0;
}
`;

export const Faixa1QuadroBackground = styled.div`
background-color:white;
height:100%;
margin-left:10rem;
margin-top:2rem;
position:absolute;
width:80%;

@media (max-width:768px) {
  margin-left:8rem;
}
`;

export const Faixa1QuadroTexto = styled.div`
background-color:${(props) => props.theme.client.colors.primary};
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
padding:15px;
position:relative;
width:100%;
`;

export const ButtonWrapper = styled.div<{ margem?: string }>`
align-items: flex-start;
display: flex;
flex-direction: column;
justify-content: center;
margin: ${(props) => props.margem || "0"};
position: relative;

@media (max-width: 900px) {
  align-items: center;
  width: 100%;
}
`;

export const Faixa1ButtonWrapper = styled(ButtonWrapper)`
`;

export const Faixa1ButtonWrapperMobile = styled(ButtonWrapper)`
display:none;
margin:2rem 0;

@media (max-width:900px) {
  display:flex;
}
`;

export const Faixa1Titulo = styled(Title)`
font-size:35px;
font-weight:bold;
margin-bottom:0;
position:relative;
text-align:center;
z-index:1;

@media (max-width:768px) {
  font-size:25px;
}
`;

export const Faixa1Textos = styled(FaixaTextos)`
align-items: flex-start;
position: relative;
text-align: left;
width: 100%;
z-index: 10;

@media (max-width: 900px) {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 55rem;
  text-align: center;
}
`;

export const Faixa1Texto = styled.p`
color:white;
font-size:20px;
line-height:1.5;
text-align:center;
text-transform:uppercase;

strong {
  font-size:25px;
  font-style:italic;
}
@media (max-width: 600px) {
  max-width:55%;
  br {
    display:none;
  }
}
`;

export const SelosContainer = styled.div`
width:243px;
`;

export const ArquivoSeguroContent = styled.div`
text-align: center;
display: flex;
align-items: center;
`;

export const ArquivoSeguro = styled.p`
color: white;
font-size: 1.4rem;
font-weight: 300;
margin-left: 0.5rem;
`;

export const MarkedText = styled.span`
background: #DE9D45;
background: linear-gradient(to right, #DE9D45 0%, #f2bf81 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size:36px;
font-weight:900;

@media (max-width:600px) {
  font-size:30px;
}
`;
