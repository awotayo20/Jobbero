import axios from 'axios'
import { toast } from 'sonner'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const AdminCreateJob = async (data) => {
  try {
    const token = localStorage.getItem('bearerToken')

    const response = await axios.post(
      `${API_BASE_URL}/api/v1/job/admin`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    toast.success('Successful')
    console.log(response)
  } catch (error) {
    console.log(error)
    toast.error('Failed to create Job')
  }
}

export default AdminCreateJob
