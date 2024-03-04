import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const AdminGetAllJobList = async () => {
  let token = localStorage.getItem('bearerToken')
  let response

  try {
    response = await axios.get(`${API_BASE_URL}/api/v1/job/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response)
  } catch (error) {
    console.log(error)
  }

  return response
}
