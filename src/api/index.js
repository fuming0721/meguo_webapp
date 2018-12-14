export default {
  install (Vue, api) {
    Vue.prototype.$api = (endpoint, params) => {
      return new Promise((resolve, reject) => {
        api[endpoint](params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
