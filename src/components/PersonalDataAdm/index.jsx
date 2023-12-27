import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { ButtonDefault } from '../../styles';

const PersonalDataAdm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="txtNome">
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder=" "
                  autoFocus
                  value={formData.nome}
                  onChange={handleChange}
                />
                <label htmlFor="txtNome">Nome</label>
              </Form.Floating>
            </Form.Group>

            <Row className="mb-3">
              <Col md={5} xl={6} className="mb-3 md:mb-0">
                <Form.Group controlId="txtCPF">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={formData.cpf}
                      onChange={handleChange}
                    />
                    <label htmlFor="txtCPF">CPF</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
              <Col md={7} xl={6}>
                <Form.Group controlId="txtDataNascimento">
                  <Form.Floating>
                    <Form.Control
                      type="date"
                      placeholder=" "
                      value={formData.dataNascimento}
                      onChange={handleChange}
                    />
                    <label htmlFor="txtDataNascimento">Data de Nascimento</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="txtEmail">
              <Form.Floating>
                <Form.Control
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="txtEmail">Email</label>
              </Form.Floating>
            </Form.Group>

            <Form.Group className='mb-3' controlId="txtTelefone">
              <Form.Floating>
                <Form.Control
                  type="tel"
                  placeholder=" "
                  value={formData.telefone}
                  onChange={handleChange}
                />
                <label htmlFor="txtTelefone">Telefone</label>
              </Form.Floating>
            </Form.Group>
            <ButtonDefault type="submit">
              Salvar
              </ButtonDefault>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default PersonalDataAdm;
