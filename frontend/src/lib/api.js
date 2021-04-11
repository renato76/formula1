import axios from 'axios'

// GET ALL DRIVERS
export const getAllDrivers = () => {
  return axios.get('/api/drivers/')
}

// GET SINGLE DRIVER
export const getSingleDriver = driverId => {
  return axios.get(`/api/drivers/${driverId}`)
}

// GET ALL TEAMS
export const getAllTeams = () => {
  return axios.get('/api/teams/')
}

// GET SINGLE TEAM
export const getSingleTeam = teamId => {
  return axios.get(`/api/teams/${teamId}`)
}