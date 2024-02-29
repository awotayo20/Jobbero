import React from 'react'
import AdminNavBar from './AdminNavBar'

const AdminDashBoard = ({ children }) => {
  return (
    <div className="flex">
      <AdminNavBar />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  )
}

export default AdminDashBoard
