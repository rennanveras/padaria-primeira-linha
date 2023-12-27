import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { AreaForm, ButtonForm, ContentForm } from './styles';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    // Implementar lógica de autenticação aqui
    console.log('Autenticando...');
  };

  return (
    <ContentForm className="container">
      <div className="d-flex flex-column align-items-center">
        <Link to={'/'} className="align-self-center">
          <img src={logo} alt="Padaria Primeira Linha" />
        </Link>
        <main className="flex-fill justify-content-center">
          <div className="row justify-content-center">
            <AreaForm
              className="col-sm-10 col-md-8 col-lg-6 p-3"
              style={{ borderRadius: '16px', backgroundColor: 'white' }}
            >
              <h3 className="text-center" style={{ color: '#863639' }}>
                Login
              </h3>
              <hr />
              <div className="form-floating mb-3">
                <input
                  type="email"
                  id="txtEmail"
                  className="form-control"
                  placeholder=" "
                  value={email}
                  onChange={handleEmailChange}
                  autoFocus
                />
                <label htmlFor="txtEmail">E-mail</label>
                {/* Adicionando validação de e-mail */}
                {email && !/\S+@\S+\.\S+/.test(email) && (
                  <small style={{ color: 'red' }}>Informe um e-mail válido.</small>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="txtSenha"
                  className="form-control"
                  placeholder=" "
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  title="Mínimo de 6 caracteres, sendo pelo menos uma letra e um número"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  required
                />
                <label htmlFor="txtSenha">Senha</label>
                {/* Adicionando validação de senha */}
                {password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password) && (
                  <small style={{ color: 'red' }}>
                    Mínimo de 6 caracteres, sendo pelo <br/> menos uma letra e um número.
                  </small>
                )}
              </div>
              <div className="d-flex justify-content-around items-center">
                <div className="form-check mb-3" style={{ color: '#4a1d1f' }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="chkLembrar"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="chkLembrar" className="form-check-label text-small me-4 sm:me-0" style={{ color: '#4a1d1f' }}>
                    Lembrar minha senha
                  </label>
                </div>
                <div>
                  <a href="" className="text-decoration-none text-small">
                    Esqueci minha senha
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-around gap-3 mt-5 p-2">
                <ButtonForm as={Link}
                  to={'/cadastro'}
                  type="button"
                  className="transparent"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Cadastrar
                </ButtonForm>
                <ButtonForm as={Link}
                  to={'/adm'}
                  onClick={handleLogin}
                  className="rouded-5"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Acessar
                </ButtonForm>
              </div>
            </AreaForm>
          </div>
        </main>
      </div>
    </ContentForm>
  );
};

export default FormLogin;
