import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Components/utils/AuthContext'

/**
 * This function handles private routes in a React application.
 * It checks if the user is authenticated and returns the appropriate component based on the user's authentication status.
 *
 * @returns {JSX.Element} The component to render based on the user's authentication status.
 */
export function PrivateRoutes() {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to="/login" />
}
