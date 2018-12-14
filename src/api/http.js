import axios from 'axios'
// import store from 'vuex'
axios.defaults.baseURL = `/v2`
// axios.defaults.baseURL = `${process.env.VUE_APP_BASE_API}/v2`
// axios.defaults.baseURL = `http://m.meguo.com/api`

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
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      return Promise.reject(response)
    } else {
      return { data: { } }
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  }
)

export default axios
