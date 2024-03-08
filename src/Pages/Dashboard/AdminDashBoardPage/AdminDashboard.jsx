import React from 'react'
import AdminNavBar from './AdminNavBar'
import { useAuth } from '@/Components/utils/AuthContext'
import { Navigate } from 'react-router-dom'

const AdminDashBoard = ({ children }) => {
  const { user } = useAuth()

  if (user?.role !== 'SUPER_ADMIN') {
    return <></>
  } else
    return (
      <div className="flex">
        <AdminNavBar />
        <div className="container mx-auto flex-1 py-10">{children}</div>
      </div>
    )
}

export default AdminDashBoard
