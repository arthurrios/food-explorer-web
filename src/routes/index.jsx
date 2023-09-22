/* eslint-disable */

import { BrowserRouter } from 'react-router-dom'
import { CustomerRoutes } from './customer.routes'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const isAdmin = true
  const user = true

  return (
    <BrowserRouter>
      {user ? 
        (isAdmin ? <AdminRoutes /> : <CustomerRoutes />) : <AuthRoutes />}
    </BrowserRouter>
  )
}
