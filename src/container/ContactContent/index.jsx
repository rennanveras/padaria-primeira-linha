import { Container, Row, Form } from 'react-bootstrap';
import { useState } from 'react';
import { ButtonDefault } from '../../styles'; // Importe ButtonDefault do seu estilo

const ContactContent = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add lógica para o envio da mensagem
  };

  return (
    <Container className="mt-5 mb-4">
      <Row className="justify-content-center">
        <Form className="col-sm-10 col-md-8 col-lg-6">
          <h1>Entre em Contato</h1>

          <Form.Group className="mb-3" controlId="txtNome">
            <Form.Floating>
              <Form.Control
                type="text"
                placeholder=" "
                autoFocus
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
              <label htmlFor="txtNome">Nome</label>
            </Form.Floating>
          </Form.Group>

          <Form.Group className="mb-3" controlId="txtEmail">
            <Form.Floating>
              <Form.Control
                type="email"
                placeholder=" "
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="txtEmail">E-mail</label>
            </Form.Floating>
          </Form.Group>

          <Form.Group className="mb-3" controlId="txtMensagem">
            <Form.Floating>
              <Form.Control
                as="textarea"
                placeholder=" "
                style={{ height: '200px', resize: 'none' }}
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
              />
              <label htmlFor="txtMensagem">Mensagem</label>
            </Form.Floating>
          </Form.Group>

          <ButtonDefault type="button" onClick={handleSubmit} size="lg">
            Enviar Mensagem
          </ButtonDefault>

          <p className="mt-3">
            Faremos nosso melhor para responder sua mensagem o mais rápido possível.
          </p>

          <p className="mt-3">
            Atenciosamente,<br />
            Padaria Primeira Linha
          </p>
        </Form>
      </Row>
    </Container>
  );
};

export default ContactContent;
