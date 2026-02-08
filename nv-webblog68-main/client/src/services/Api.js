import axios from 'axios'
import { useAuthenStore } from '../stores/authen' // <--- ต้องเป็น .. เหมือนกัน

export default () => {
  const authenStore = useAuthenStore()
  return axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
      Authorization: `Bearer ${authenStore.token}`
    }
  })
}