import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    checkUserStatus()
  }, [])

  const loginUser = async (userInfo) => {
    setLoading(true)

    let url = 'https://jobbero.onrender.com/api/v1/auth/signin-user'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
      })
      const result = await response.json()
      const token = result.data.token
      localStorage.setItem('bearerToken', token)
      navigate('/')
    } catch (error) {
      console.log('accountDetails', accountDetails)
    }
    setLoading(false)
  }

  const LogoutUser = () => {}

  const RegisterUser = (userInfo) => {}

  const checkUserStatus = async () => {
    let token = localStorage.getItem('bearerToken')
    let url = 'https://jobbero.onrender.com/api/v1/auth/current-user'

    try {
      const response = await fetch(
        'https://jobbero.onrender.com/api/v1/auth/current-user',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            Cookie:
              'jobbero-session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJbU5rTVdVNFpqTTJMVFU1T0RNdE5EbGxNQzA0TmpOaUxUTTVZMkkyWlRKak9UUTJNU0lzSW1WdFlXbHNJam9pYzJGdFFHZHRZV2xzTG1OdmJTSXNJbVpwY25OMFRtRnRaU0k2SW5OaGJtUnlZU0lzSWt4aGMzUk9ZVzFsSWpvaVpXMWxhMkVpTENKd2FHOXVaVTUxYldKbGNpSTZJakE0TVRNd01EZzROREF3SWl3aWNtOXNaU0k2SWtwUFFsOVRSVVZMUlZJaUxDSnBjMFZ0WVdsc1ZtVnlhV1pwWldRaU9uUnlkV1VzSW1selJXNWhZbXhsWkNJNmRISjFaU3dpYVdGMElqb3hOekE0TURFd05ESTJMQ0psZUhBaU9qRTNNRGd3T1RZNE1qWjkuMHJ1Mk5UT1ZZOUt0aEc4VmRVU3YzckdBZ29BZGgyYjFqV3M0LW81anpOcyJ9',
          },
        }
      )
      const data = await response.json()
      let accountDetails = JSON.stringify(data)
      console.log(accountDetails)
      setUser(accountDetails)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const contextData = {
    user,
    loginUser,
    LogoutUser,
    RegisterUser,
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
