import axios from 'axios'
import { toast } from 'sonner'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const AdminPostJob = async (id) => {
  try {
    const token = localStorage.getItem('bearerToken')
    const config = {
      method: 'post',
      url: `${API_BASE_URL}/api/v1/job/admin/${id}/post`,
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = await axios.request(config)
    console.log(JSON.stringify(response.data))
    toast.success('Successfully Posted')
  } catch (error) {
    toast.error('Failed to Post')
  }
}
