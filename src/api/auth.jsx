import axios from './axios'

export const login = (data) =>
  axios({
    method: 'POST',
    url: 'login',
    data,
  })
