import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Dish } from '../pages/Dish'
import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dish" element={<Dish />} />
      <Route path="/add-dish" element={<AddDish />} />
      <Route path="/edit-dish" element={<EditDish />} />
    </Routes>
  )
}
