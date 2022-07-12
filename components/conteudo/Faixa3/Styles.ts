import styled from "styled-components";
import Title from "@/components/ui/tipografia/Title";

export const Faixa3Wrapper = styled.div`
background:url("/images/faixa3/background.png") no-repeat center bottom;
background-size:100% 100%;
position:relative;
z-index:3;
`;

export const Faixa3Conteudo = styled.div`
align-items:flex-start;
display:flex;
flex-direction:column;
justify-content:center;
padding:3rem 0;
`;

export const Faixa3Titulo = styled(Title)`
color:${(props) => props.theme.client.colors.primary};
font-size:35px;
text-transform:initial;

@media (max-width:900px) {
  margin:0 auto 2rem;
  text-align:center;
}
@media (max-width:600px) {
  font-size:25px;
}
`;

export const Faixa3Texto = styled.p`
color:white;
font-size:15px;
font-weight:500;
line-height:1.5;
margin-bottom:2rem;

@media (max-width:900px) {
  margin:0 auto 2rem;
  max-width:500px;
  text-align:center;
}
`;

export const Faixa3LogoGrupoMagnet = styled.div`
width:284px;
`;

export const Faixa3Video = styled.div`
margin:2rem 0 5rem;
width:100%;
iframe,
video {
  height:300px;
  max-width:625px;
  width:100%;

  @media (max-width:1140px) {
    height:30vw;
  }
  @media (max-width:900px) {
    height: calc(58vw - 4rem);
    max-height:352px;
  }
}

@media (max-width:900px) {
  text-align:center;
}
`;
