import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')

  const loginUser = async (userInfo) => {
    setLoading(true)

    let url = `${API_BASE_URL}/api/v1/auth/signin-user`

    try {
      const response = await axios.post(url, userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      console.log(response)

      const result = response.data
      const token = result.data.token
      localStorage.setItem('bearerToken', token)
      setLoading(false)
      toast.success('Login Successful')
    } catch (error) {
      toast.error('Failed to Login')
      setLoading(false)
      console.log(error)
    }
    setLoading(false)
  }

  const logoutUser = () => {
    localStorage.removeItem('bearerToken')
    setUser(null)
  }

  const registerUser = async (userInfo) => {
    setLoading(true)

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
      setLoading(false)
      toast.success('Register Successfully')

      const result = response.data
      console.log(result)
    } catch (error) {
      setLoading(false)
      toast.error('Failed to Register')

      console.log(error)
    }
  }

  const checkUserStatus = async () => {
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
      console.log(response)
      const data = response.data
      let currentUser = data.currentUser
      setUser(currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUserStatus()
  }, [loading])

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext
