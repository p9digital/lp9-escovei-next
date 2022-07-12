import styled from "styled-components";

export const Faixa4Wrapper = styled.div`
background:url("/images/faixa4/background.jpg") no-repeat center center;
background-size:cover;
margin-top:-25rem;
padding-top:25rem;
position:relative;
z-index:1;
`;

export const Faixa4Conteudo = styled.div`
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
padding:10rem 0;

@media (max-width:992px) {
  padding:10rem 0;
}
`;

export const Faixa4Texto = styled.p`
border-radius:25px;
color:white;
display:inline-block;
font-size:30px;
font-weight:bold;
margin:2px 0;
padding:10px 20px;
text-align:center;

span {
  color:${(props) => props.theme.client.colors.primary};
}
@media (max-width:900px) {
  font-size:20px;
}
`;

export const Faixa4ListaItens = styled.div`
display:flex;
gap:5rem;
justify-content:center;
margin:0 -5rem 5rem;
`;

export const Faixa4ListaItem = styled.div`
display:flex;
justify-content:space-between;

span {
  color:white;
}
`;

export const Faixa4ListaItemIcone = styled.div`
margin-right:1rem;
`;
