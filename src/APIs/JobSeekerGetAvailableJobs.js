import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const JobSeekerGetAvailableJobs = async () => {
  let token = localStorage.getItem('bearerToken')
  let result
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/job/jobseeker`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    result = response.data.data
    console.log(response)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
  return result
}
