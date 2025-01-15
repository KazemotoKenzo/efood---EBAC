import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import GlobalCSS from './styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={router} />
    </>
  )
}

export default App
