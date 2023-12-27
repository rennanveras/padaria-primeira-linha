import { Col, Form } from 'react-bootstrap';
import { ButtonDefault } from '../../styles';

const ChangePasswordAdm = () => {
  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
    window.location.href = '#';
  };

  return (
    <Col sm={12} md={8} lg={6}>
      <Form>
        <div className="form-floating mb-3">
          <input type="password" id="txtSenhaAtual" className="form-control" placeholder=" " autoFocus />
          <label htmlFor="txtSenhaAtual">Digite aqui sua senha atual</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" id="txtSenha" className="form-control" placeholder=" " />
          <label htmlFor="txtSenha">Digite aqui sua nova senha</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" id="txtConfSenha" className="form-control" placeholder=" " />
          <label htmlFor="txtConfSenha">Redigite aqui a nova senha</label>
        </div>
        <ButtonDefault onClick={handleSubmit}>
          Alterar Senha
        </ButtonDefault>
      </Form>
    </Col>
  );
};

export default ChangePasswordAdm;
