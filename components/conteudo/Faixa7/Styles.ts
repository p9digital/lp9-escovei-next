import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa7Wrapper = styled(FaixaWrapperSimples)`
background-color:${(props) => props.theme.client.colors.secondary};
padding:10rem 0;
position:relative;
`;

export const Faixa7TextoImagem = styled.div`
left:100%;
position:absolute;
transform:translate(20%);
top:0;
width:247px;

@media (max-width:900px) {
  transform:translate(-50%);
  top:-7rem;
  width:150px;
}
@media (max-width:768px) {
  transform:translate(-100%);
  width:100px;
}
`;

export const Faixa7Titulo = styled(Title)`
font-size:30px;
font-weight:bold;
text-transform:uppercase;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa7Texto = styled.p`
color:white;
font-size:15px;
margin-bottom:4rem;

@media (max-width:600px) {
  font-size:2rem;
}
`;

export const Faixa7ListaItens = styled.div`
display:flex;
flex-wrap:wrap;
gap:2rem 0;
justify-content:flex-start;
margin-bottom:5rem;
width:100%;
`;

export const Faixa7ListaItem = styled.div`
align-items:center;
display:flex;
width:calc(100% / 3);

&:last-child {
  width:calc(100% / 3 * 2);
}

@media (max-width:1200px) {
  width:calc(100% / 2);
}
@media (max-width:900px) {
  width:calc(100% / 3);
}
`;

export const Faixa7ListaItemIcone = styled.div`
margin-right:1rem;
width:34px;
`;

export const Faixa7ListaItemTexto = styled.p`
color:white;
font-size:15px;
`;
