import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootReducer } from './store'

import Home from './pages/Home'
import Profile from './pages/Profile'
import { fetchRestaurants } from './store/reducers/restaurants'
import { Loading } from './styles/loading'

const Rotas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector(
    (state: RootReducer) => state.restaurants
  )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRestaurants())
    }
  }, [dispatch, status])

  if (status === 'loading') {
    return <Loading>Carregando...</Loading>
  }

  if (status === 'failed') {
    return <Loading>Erro: {error}</Loading>
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Profile />} />
    </Routes>
  )
}

export default Rotas
