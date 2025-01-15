import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    path: '/perfil',
    element: <Profile />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
