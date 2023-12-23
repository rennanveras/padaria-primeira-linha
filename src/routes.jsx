import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'

const Rotas = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/cardapio" element={<Menu />} />
      <Route path="/sobre-nos" element={<Register />} />
      <Route path="/Contato" element={<Register />} />
    </Routes>
  </>
)

export default Rotas
