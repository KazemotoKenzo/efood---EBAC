import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

import GlobalCSS from './styles'
import Footer from './containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalCSS />
        <Rotas />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
