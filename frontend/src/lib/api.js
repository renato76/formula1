import axios from 'axios'

// GET ALL DRIVERS
export const getAllDrivers = () => {
  return axios.get('/api/drivers/')
}

export const getSingleDriver = driverId => {
  return axios.get(`/api/drivers/${driverId}`)
}