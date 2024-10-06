import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'
import Login from './pages/Login'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserDashboard from './pages/User/UserDashboard'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/settings" element={<AdminDashboard />} />
          </Route>

          <Route element={<UserLayout />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
