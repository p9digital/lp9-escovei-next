import styled from "styled-components";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

import Title from "@/components/ui/tipografia/Title";

export const Faixa2Wrapper = styled(FaixaWrapperSimples)`
background:url("/images/faixa2/background.png") no-repeat center bottom;
background-size:cover;
margin-bottom:5rem;
padding-bottom:5rem;
`;

export const Faixa2Titulo = styled(Title)`
color:${(props) => props.theme.client.colors.white};
font-size:35px;
text-transform:uppercase;

@media (max-width:900px) {
  font-size:18px;
  text-align:center;
}
`;

export const Faixa2Texto = styled.p`
color:${(props) => props.theme.client.colors.white};
font-size:25px;
line-height:1.5;
margin-bottom:15px;

@media (max-width:900px) {
  text-align:center;
}
@media (max-width:600px) {
  br {
    display:none;
  }
}
`;

export const ListaItens = styled.div`
display:flex;
flex-direction:column;
gap:2rem 0;
margin:2rem 0;
`;
