import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Tab, Nav, Container, Col, Row } from 'react-bootstrap';

import { IoPersonOutline, IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { TbLock } from "react-icons/tb";


import PersonalDataAdm from '../../components/PersonalDataAdm';
import AdressAdm from '../../components/AdressAdm';
import RequestsAdm from '../../components/RequestsAdm';
import ChangePasswordAdm from '../../components/ChangePasseordAdm';

const ContentAdm = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelect = (key) => {
    setSelectedComponent(key);
  };

  const handleLogout = () => {
    // Redirecionar para a página inicial
    navigate('/');
  };

  const itensTabs = [
    {
      name: 'Dados Pessoais',
      key: 'dados-pessoais',
      component: <PersonalDataAdm />,
      icon: <IoPersonOutline />,
      id: 1
    },
    {
      name: 'Endereço',
      key: 'endereco',
      component: <AdressAdm />,
      icon: <IoHomeOutline />,
      id: 2
    },
    {
      name: 'Pedidos',
      key: 'pedidos',
      component: <RequestsAdm />,
      icon: <BsTruck />,
      id: 3
    },
    {
      name: 'Alterar Senha',
      key: 'alterar-senha',
      component: <ChangePasswordAdm />,
      icon: <TbLock />,
      id: 4
    },
  ]

  return (
    <Container className='my-5'>
      <h1 className='mb-2'>Minha Conta</h1>
      <Row>
        <Col>
          <Tab.Container activeKey={selectedComponent} onSelect={handleSelect}>
            <Row>
              <Col sm={4} className='mb-5'>
                <Nav variant="pills" className="flex-column border rounded-2">
                  {itensTabs.map((item) => (
                    <Nav.Item
                      key={item.id}
                      onClickCapture={() => setSelectedComponent(item.key)}
                      className='border-bottom border-1'
                    >
                      <Nav.Link
                        className='d-flex align-items-center gap-3'
                        eventKey={item.key}
                        style={{
                          backgroundColor: selectedComponent === `${item.key}` ? '#4A1D1F' : '',
                          borderRadius: '0', // Remover a borda arredondada
                          color: selectedComponent === `${item.key}` ? 'white' : 'black', // Adicionar cor de texto para o item selecionado
                        }}
                      >

                        <>{item.icon} <span className='ml-2'>{item.name}</span></>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                  <Nav.Item
                    onClickCapture={() => handleLogout()}
                    className='border-bottom border-1'
                  >
                    <Nav.Link
                      className='d-flex align-items-center gap-3'
                      eventKey={'sair'}
                      style={{
                        backgroundColor: selectedComponent === 'sair' ? '#4A1D1F' : '',
                        borderRadius: '0',
                        color: selectedComponent === 'sair' ? 'white' : 'black',
                      }}
                    >
                      <>
                        {<IoExitOutline />} <span className='ml-2'>Sair</span>
                      </>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                {itensTabs.map((item) => (
                  <div key={item.id}>
                    {selectedComponent === item.key && <>{item.component}</>}
                  </div>
                ))}
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentAdm;
