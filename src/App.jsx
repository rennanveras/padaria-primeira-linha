import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

import { StyleGlobal } from './styles'

import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Rotas />
      <Cart />
    </BrowserRouter>
  )
}

export default App
