import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
import fotoLocal from '../../assets/images/banner.png';

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col xs={12} md={12} lg={6} className="mb-4 mb-md-0">
            <div>
              <h3>Padaria Primeira Linha</h3>
              <p>
                Há 27 anos, a Padaria Primeira Linha é o seu lugar preferido para café da manhã, almoço, sobremesas e jantas, fazendo parte do seu dia a dia. Nossos produtos artesanais são feitos com carinho, seguindo receitas tradicionais e utilizando ingredientes de alta qualidade. Oferecemos uma ampla variedade, desde pães clássicos até opções especiais como pão de queijo e croissants recheados. Priorizamos a qualidade em cada produto, utilizando ingredientes frescos e selecionados para garantir o sabor autêntico. Com atendimento excepcional, nossa equipe está pronta para tornar sua experiência na padaria ainda mais especial. Venha nos visitar na Rua Tavares Coutinho, 1871 - Varjota, Fortaleza. Seja bem-vindo à Padaria Primeira Linha, onde cada detalhe é pensado para proporcionar a você uma experiência deliciosa e memorável.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className='mb-5'>
            <Image src={fotoLocal} alt="" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
