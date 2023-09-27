import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Dish } from '../pages/Dish'
import { Order } from '../pages/Order'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dish" element={<Dish />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  )
}
