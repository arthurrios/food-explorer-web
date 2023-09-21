import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}
