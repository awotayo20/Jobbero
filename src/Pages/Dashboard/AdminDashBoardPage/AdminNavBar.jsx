import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div className="h-[100%] flex flex-col w-[280px] bg-[#001F3F] text-white">
      <a href="/create-job">create job</a>
      <a href="/post-job">post job</a>
    </div>
  )
}

export default AdminNavBar
