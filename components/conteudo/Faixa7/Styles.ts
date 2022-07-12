import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa7Wrapper = styled(FaixaWrapperSimples)`
background-color:${(props) => props.theme.client.colors.secondary};
padding:10rem 0 20rem;
position:relative;

@media (max-width:900px) {
  background-size:cover;
}
@media (max-width:600px) {
  padding:10rem 0 25rem;
}
`;

export const Faixa7TextoImagem = styled.div`
left:100%;
position:absolute;
transform:translate(20%);
top:0;
width:247px;
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
`;

export const Faixa7ListaItem = styled.div`
align-items:center;
display:flex;
width:calc(100% / 3);

&:last-child {
  width:calc(100% / 3 * 2);
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
