import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const PrivateRoutes = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (user) {
    return <Outlet />
  }

  return <Navigate to={'/login'} replace />
}

export default PrivateRoutes
