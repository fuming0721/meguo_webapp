import { Notify } from 'vant'
import axios from 'axios'
axios.defaults.baseURL = `/v2`
// axios.defaults.baseURL = `https://m.meguo.com/api`
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 在实例已创建后修改默认值
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

let pending = []
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      pending[p].f()
      pending.splice(p, 1)
    }
  }
}

axios.interceptors.request.use(
  config => {
    removePending(config) // 取消重复请求
    config.cancelToken = new axios.CancelToken((c) => {
      pending.push({ u: config.url + '&' + config.method, f: c })
    })
    return config
  },
  error => {
    return Promise.error(error)
  }
)
axios.interceptors.response.use(
  res => {
    removePending(res.config)
    return res
  },
  error => {
    if (error && error.response) {
      console.log(error)
      Notify(error.response.data.info)
    }
    return { data: { } }
  }
)

export default axios
