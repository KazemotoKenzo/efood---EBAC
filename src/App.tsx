import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Home from './pages/Home'
import GlobalCSS from './styles'
import Footer from './containers/Footer'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil/:id',
    element: <Profile />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCSS />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  )
}

export default App
