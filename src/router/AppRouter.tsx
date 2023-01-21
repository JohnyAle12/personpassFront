import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Login } from '../components/Login'
import { Pocket } from '../components/Pocket'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={
          <PrivateRouter>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pocket" element={<Pocket />} />
            </Routes>
          </PrivateRouter>
        } />
        
      </Routes>
    </>
  )
}
