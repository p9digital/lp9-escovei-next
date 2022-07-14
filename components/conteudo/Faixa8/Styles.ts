import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa8Wrapper = styled(FaixaWrapperSimples)`
padding:5rem 0;
position:relative;
`;

export const Faixa8Produtos = styled.div`
margin:-50rem 0 5rem 5rem;
width:711px;

@media (max-width:900px) {
  width:200px;
}
@media (max-width:768px) {
  margin:-50rem 0 5rem 1rem;
}
@media (max-width:600px) {
  display:none;
}
`;

export const Faixa8TextoCardapio = styled.div`
width:235px;
`;

export const Faixa8Titulo = styled(Title)`
font-size:40px;
font-weight:bold;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa8Texto = styled.p`
color:black;
font-size:18px;
margin-bottom:4rem;

@media (max-width:600px) {
  font-size:2rem;
}
`;

export const Faixa8ListaItens = styled.div`
display:flex;
flex-wrap:wrap;
gap:2rem 0;
justify-content:flex-start;
margin-bottom:5rem;
width:100%;
`;

export const Faixa8ListaItem = styled.div`
align-items:center;
display:flex;
width:calc(100% / 3);
`;

export const Faixa8ListaItemIcone = styled.div`
margin-right:1rem;
width:34px;
`;

export const Faixa8ListaItemTexto = styled.p`
color:black;
font-size:15px;
`;

export const ListaImagens = styled.div`
display:flex;
gap:5rem;
justify-content:space-between;
margin:0 -5rem 5rem;

@media (max-width:1200px) {
  margin:0 0 5rem;
}
@media (max-width:768px) {
  gap:2rem;
}
`;

export const ListaImagemItem = styled.div`
`;
