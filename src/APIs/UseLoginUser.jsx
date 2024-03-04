// import { useMutation } from 'react-query'
// import { toast } from 'sonner'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// export const UseLoginUser = () => {
//   const loginUserRequest = async (userInfo) => {
//     const navigate = useNavigate()

//     let url = `${API_BASE_URL}/api/v1/auth/signin-user`

//     try {
//       const response = await axios.post(url, userInfo, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       })

//       const result = response.data
//       const token = result.data.token
//       localStorage.setItem('bearerToken', token)
//       toast.success('Login Successful')
//       navigate('/job-search-result')
//     } catch (error) {
//       toast.error('Failed to Login')
//       console.log(error)
//     }
//   }
//   const {
//     mutateAsync: loginUser,
//     isLoading,
//     isError,
//     isSuccess,
//   } = useMutation(loginUserRequest)
//   return {
//     loginUser,
//     isLoading,
//     isError,
//     isSuccess,
//   }
// }
