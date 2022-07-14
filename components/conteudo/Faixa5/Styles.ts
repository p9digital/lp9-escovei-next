import styled from "styled-components";
import Title from "@/components/ui/tipografia/Title";
import Paragraph from "@/components/ui/tipografia/Paragraph";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";
import { ButtonWrapper } from "../Faixa1/Styles";
import { FormMobile } from "@/pages";

export const Faixa5Wrapper = styled(FaixaWrapperSimples)`
background:url("/images/faixa5/background.jpg") no-repeat center center;
background-size:cover;
position:relative;
z-index:2;
`;

export const Faixa5Titulo = styled(Title)`
font-size:30px;
font-weight:bold;
@media (max-width:900px) {
  font-size:25px;
}
@media (max-width:600px) {
  font-size:22px;
}
`;

export const Faixa5Subtitulo = styled(Title)`
background: #DE9D45;
background: linear-gradient(to right, #DE9D45 0%, #f2bf81 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size:25px;
text-transform:uppercase;

@media (max-width:600px) {
  br {
    display:none;
  }
}
`;

export const Faixa5Texto = styled(Paragraph)`
color:black;
margin-bottom:2rem;
`;

export const ListaItens = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
margin-bottom:5rem;
`;

export const Faixa5Modelo = styled.div`
margin:auto;
width:387px;

@media (max-width:900px) {
  margin-top:15rem;
}
@media (max-width:768px) {
  width:250px;
}
`;

export const Faixa5FormMobile = styled(FormMobile)`
@media (max-width:900px) {
  margin-bottom:-10rem;
}
`;

export const ButtonWrapperDesktop = styled(ButtonWrapper)`
@media (max-width:900px) {
  display:none;
}
`;
