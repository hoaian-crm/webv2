import Axios from 'axios';

export const instance = Axios.create({
  baseURL: 'https://api.relationc.com'
})
