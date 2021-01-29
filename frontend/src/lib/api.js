import axios from 'axios'

// GET ALL DRIVERS
export const getAllDrivers = () => {
  return axios.get('/api/drivers/')
}