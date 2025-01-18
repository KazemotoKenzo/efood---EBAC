import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import { fetchRestaurants } from './store/reducers/restaurants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'

const Rotas = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Profile />} />
    </Routes>
  )
}

export default Rotas
