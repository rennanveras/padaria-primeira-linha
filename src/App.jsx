import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { StyleGlobal } from './styles'

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
