import styled from 'styled-components';
import Container from '../ui/containers/Container';

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.client.colors.brancoEscuro};
  position: relative;
  padding: 2rem 0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const FooterContent = styled.div`
  color: #000;
  display: flex;
  justify-content: flex-start;
  max-width: 65rem;
  text-align: left;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    font-size: 14px;
    @media (max-width: 500px) {
      font-size: 12px;
    }

    strong {
      a {
        color: #000;
      }
    }
  }
`;

const FooterP9 = styled.div`
  display: flex;
  justify-content: center;
  max-width: 65rem;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }

  a {
    font-size: 12px;
    color: #000;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterContent>
            <div>
              <p>
                <strong>CNPJ:</strong>  41.667.301/0001-50
              </p>
              <p>
                <strong>Razão Social:</strong> ESCOVEI EXPRESS LTDA
              </p>
              <p>
                <strong>Endereço:</strong> AV DOUTOR ERASMO, 188 - SALA 1 E 2 - VILA ASSUNÇÃO, SANTO ANDRÉ - SP
              </p>
            </div>
          </FooterContent>
          <FooterP9>
            <a
              href="https://p9.digital"
              title="Agência de marketing digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geração de leads qualificados via marketing digital por{' '}
              <strong>P9 Digital</strong>
            </a>
          </FooterP9>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
