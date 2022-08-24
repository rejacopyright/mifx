import axios from './axios'

export const getProduct = () =>
  axios({
    method: 'GET',
    url: 'products',
  })
