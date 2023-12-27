import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import Adm from './pages/Adm'
import ContactForm from './pages/Contato'
import AboutUs from './pages/AboutUs'

const Rotas = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/cardapio" element={<Menu />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/contato" element={<ContactForm />} />
      <Route path="/adm" element={<Adm />} />
    </Routes>
  </>
)

export default Rotas
