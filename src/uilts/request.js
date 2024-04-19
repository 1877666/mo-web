import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { message } from './message'
const request = axios.create({
  baseURL:'/api',
  timeout: 15000
})

request.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    config.headers['authorization'] = `Bearer ${useUserStore().token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    const err = error.response.data
    message(err.msg||'系统错误','error')
    return Promise.reject(err)
  }
)

export default request
