import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  // Login Function
  const loginUser = async (userInfo) => {
    let url = `${API_BASE_URL}/api/v1/auth/signin-user`

    try {
      const response = await axios.post(url, userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      const result = response.data
      const token = response.data.data.token
      console.log(token)
      localStorage.setItem('bearerToken', token)
      toast.success('Login Successful')
      navigate('/job-search-result')
    } catch (error) {
      toast.error('Failed to Login')
    }
  }

  // Logout Function
  const logoutUser = () => {
    localStorage.removeItem('bearerToken')
    setUser(null)
  }

  // Register Function
  const registerUser = async (userInfo) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/register-user`,
        userInfo,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      toast.success('Register Successfully')

      const result = response.data
    } catch (error) {
      toast.error('Failed to Register')
    }
  }

  //Check user function
  const checkUserStatus = async () => {
    setLoading(true)
    let token = localStorage.getItem('bearerToken')

    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/auth/current-user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = response.data
      let currentUser = data.currentUser
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkUserStatus()
  }, [])

  const contextData = {
    loading,
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>loading...</p> : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext
