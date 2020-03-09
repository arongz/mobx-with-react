import qs from 'qs'
import axios from 'axios'
// import router from '@/router'
import { withRouter } from 'react-router'


// http request 拦截器
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  console.dir('router' + '..................')
  if (response.data.code !== 'undefined') {
    switch (response.data.code) {
      case 0:
        break
    }
    return response
  } else {
    return response
  }
}, error => {
  console.log('error.response.......')
  if (error.response) {
    switch (error.response.data.code) {
      case 401:
    }
  }
  return Promise.reject(error.response.data) // 返回接口返回的错误信息
})

// fetch 类似于 Ajax
export default function fetch (url, params, method) {
  return new Promise((resolve, reject) => {
    axios({
      method: method || 'GET',
      url: url,
      data: params
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
