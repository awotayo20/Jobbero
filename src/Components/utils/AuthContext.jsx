import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [alert, setAlert] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    checkUserStatus()
  }, [])

  const loginUser = async (userInfo) => {
    setLoading(true)

    let url = 'https://jobbero.onrender.com/api/v1/auth/signin-user'

    try {
      const response = await axios.post(url, userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      const result = response.data
      const token = result.data.token
      localStorage.setItem('bearerToken', token)
      setAlert('Successfully logged in')
      navigate('/')
    } catch (error) {
      setAlert('Login failed. Please check your credentials.') // Provide user feedback
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
        'https://jobbero.onrender.com/api/v1/auth/register-user',
        userInfo,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const result = response.data
      console.log(result)
    } catch (error) {
      setAlert('Registration failed. Please try again.') // Provide user feedback
      console.log(error)
    }

    setLoading(false)
  }

  const checkUserStatus = async () => {
    let token = localStorage.getItem('bearerToken')

    try {
      const response = await axios.get(
        'https://jobbero.onrender.com/api/v1/auth/current-user',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = response.data
      let currentUser = data.currentUser
      setUser(currentUser)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
      {alert && <p>{alert}</p>} {/* Display alert if there is one */}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext
