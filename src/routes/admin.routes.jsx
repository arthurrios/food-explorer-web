import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Dish } from '../pages/Dish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dish" element={<Dish />} />
    </Routes>
  )
}
