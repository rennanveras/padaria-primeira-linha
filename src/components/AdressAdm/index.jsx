import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const AdressAdm = () => {
  const [cep, setCep] = useState('');
  const [nomeRua, setNomeRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [referencia, setReferencia] = useState('');

  const handleCepChange = (e) => {
    const newCep = e.target.value.replace(/\D/g, '');
    // Lógica para buscar informações do CEP e preencher o nome da rua (deve ser implementada)
    // Substitua a linha abaixo pela chamada à API ou método de busca de CEP
    // Exemplo fictício: buscarInfoCep(newCep).then(info => setNomeRua(info.nomeRua));
    fetch(`https://viacep.com.br/ws/${newCep}/json/`)
      .then((response) => response.json())
      .then(data => {
        // Atualizar o nome da rua
        console.log(data)
        setNomeRua(data.logradouro || '');  // Se a API retornar o logradouro, define o nome da rua
        setCidade(data.localidade || '');  // Se a API retornar o logradouro, define o nome da rua
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
      });
  };

  const handleNumeroChange = (e) => {
    const newNumero = e.target.value;
    setNumero(newNumero);
  };

  const handleComplementoChange = (e) => {
    const newComplemento = e.target.value;
    setComplemento(newComplemento);
  };

  const handleReferenciaChange = (e) => {
    const newReferencia = e.target.value;
    setReferencia(newReferencia);
  };

  return (
    <section>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Row className="mb-3">
              <Col md={6} lg={4}>
                <Form.Group controlId="txtCEP" className="mb-3">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      value={cep}
                      onBlur={handleCepChange}
                      onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                    />
                    <label htmlFor="txtCEP">CEP</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
              <Col md={6} lg={8}>
                <Form.Group controlId="txtCEPInfo" className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    style={{ height: '58px', fontSize: '14px', resize: 'none' }}
                    placeholder="Digite o CEP para buscarmos o endereço."
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="txtNomeRua" className="mb-3">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={nomeRua}
                      onChange={(e) => setNomeRua(e.target.value)}
                    />
                    <label htmlFor="txtNomeRua">Nome da Rua</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="txtNomeRua" className="mb-3">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                    <label htmlFor="txtNomeRua">Cidade</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="txtNumero" className="mb-3">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={numero}
                      onChange={handleNumeroChange}
                    />
                    <label htmlFor="txtNumero">Número</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="txtComplemento" className="mb-3">
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={complemento}
                      onChange={handleComplementoChange}
                    />
                    <label htmlFor="txtComplemento">Complemento</label>
                  </Form.Floating>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="txtReferencia" className="mb-3">
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder=" "
                  value={referencia}
                  onChange={handleReferenciaChange}
                />
                <label htmlFor="txtReferencia">Ponto de Referência</label>
              </Form.Floating>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default AdressAdm;
