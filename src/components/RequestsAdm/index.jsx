import { useState } from 'react';
import { Row, Col, Accordion, Table, Form } from 'react-bootstrap';

const RequestsAdm = () => {
  const [period, setPeriod] = useState('360');
  const [sortOrder, setSortOrder] = useState('1');

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortOrders = [
    { value: '1', label: 'Mais novos primeiro' },
    { value: '2', label: 'Mais antigos primeiro' },
  ];

  return (
    <section>
      <Row className="gx-3">
        <Col>
          <Form className="row mb-3">
            <Col md={6} className="mb-3">
              <Form.Floating>
                <Form.Select value={period} onChange={handlePeriodChange}>
                  <option value="30">Últimos 30 dias</option>
                  <option value="60">Últimos 60 dias</option>
                  <option value="90">Últimos 90 dias</option>
                  <option value="180">Últimos 180 dias</option>
                  <option value="360">Últimos 360 dias</option>
                  <option value="9999">Todo o período</option>
                </Form.Select>
                <Form.Label>Período</Form.Label>
              </Form.Floating>
            </Col>
            <Col md={6}>
              <Form.Floating>
                <Form.Select value={sortOrder} onChange={handleSortOrderChange}>
                  {sortOrders.map((order) => (
                    <option key={order.value} value={order.value}>
                      {order.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Label>Ordenação</Form.Label>
              </Form.Floating>
            </Col>
          </Form>

          <Accordion id="divPedidos">
            {[10, 9, 8, 7, 6].map((pedido) => (
              <Accordion.Item key={`pedido${pedido}`} eventKey={`pedido${pedido}`}>
                <Accordion.Header>
                  <b>Pedido {String(pedido).padStart(6, '0')}</b>
                  <span className="mx-1">(realizado em 11/10/2020)</span>
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th className="text-end">R$ Unit.</th>
                        <th className="text-center">Qtde.</th>
                        <th className="text-end">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Pão', 'Bolo', 'Torta'].map((produto, index) => (
                        <tr key={index}>
                          <td>{produto}</td>
                          <td className="text-end">2,99</td>
                          <td className="text-center">3</td>
                          <td className="text-end">8,97</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor dos Produtos:
                        </th>
                        <td className="text-end">26,91</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor do Frete:
                        </th>
                        <td className="text-end">7,50</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor a Pagar:
                        </th>
                        <td className="text-end">34,41</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Forma de Pagamento:
                        </th>
                        <td className="text-end">Crédito VISA 1x</td>
                      </tr>
                    </tfoot>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default RequestsAdm;

/* 
<Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th className="text-end">R$ Unit.</th>
                        <th className="text-center">Qtde.</th>
                        <th className="text-end">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Pão', 'Bolo', 'Torta'].map((produto, index) => (
                        <tr key={index}>
                          <td>{produto}</td>
                          <td className="text-end">2,99</td>
                          <td className="text-center">3</td>
                          <td className="text-end">8,97</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor dos Produtos:
                        </th>
                        <td className="text-end">26,91</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor do Frete:
                        </th>
                        <td className="text-end">7,50</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Valor a Pagar:
                        </th>
                        <td className="text-end">34,41</td>
                      </tr>
                      <tr>
                        <th className="text-end" colSpan="3">
                          Forma de Pagamento:
                        </th>
                        <td className="text-end">Crédito VISA 1x</td>
                      </tr>
                    </tfoot>
                  </Table>
*/