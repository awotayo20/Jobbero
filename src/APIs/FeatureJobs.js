import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

//getAllFeaturedJobs function

export const GetAllFeaturedJobs = async () => {
  let result
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/job/featured`)
    result = response.data.data
  } catch (error) {
    console.log(error)
  }
  return result
}

export const JobSeekerGetAvailableJobs = async () => {
  let token = localStorage.getItem('bearerToken')
  let result
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/job/jobseeker`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
