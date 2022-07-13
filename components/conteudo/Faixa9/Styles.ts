import Image from "next/image";
import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa9Wrapper = styled(FaixaWrapperSimples)`
background-color:${(props) => props.theme.client.colors.secondary};
padding:5rem 0;
position:relative;

@media (max-width:600px) {
  padding:50px 0;
}
`;

export const Faixa9SetaWrapper = styled.div`
left:100%;
position:absolute;
top:0;
transform:translate(-20%, 0);
width:304px;

@media (max-width:992px) {
  top:50%;
}
@media (max-width:900px) {
  display:none;
}
`;

export const Faixa9Seta = styled(Image)`
`;

export const Faixa9Titulo = styled(Title)`
color:${(props) => props.theme.client.colors.white};
font-size:35px;

span {
  background-color:${(props) => props.theme.client.colors.primary};
  box-shadow: 0.5em 0 0 ${(props) => props.theme.client.colors.primary},-0.1em 0 0 ${(props) => props.theme.client.colors.primary};
  display:inline;
}

@media (max-width:768px) {
  font-size:3rem;
}
@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa9Texto = styled.p`
color:white;
font-size:25px;
margin-bottom:4rem;

@media (max-width:768px) {
  font-size:2rem;
}
`;

export const Faixa9LogoMagnet = styled.div`
width:284px;
`;
