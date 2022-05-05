import axios from 'axios'
import { Result } from '@/types/result'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置请求token
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (config) {
  // 统一处理接口响应错误，
  const data:Result = config.data as Result

  if (data.code === 20000) {
    // 请求成功
    return config
  } else if (data.code === 20001) {
    // 请求失败
    ElMessage({
      message: data.message,
      type: 'error',
      duration: 1000
    })
  } else {
    // 服务器错误
    ElMessage({
      message: '服务器错误',
      type: 'error',
      duration: 1000
    })
  }
}, function (error) {
  return Promise.reject(error)
})

export default request
