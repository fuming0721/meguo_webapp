export default {
  set (name, value) {
    sessionStorage.setItem(name, JSON.stringify({
      value: value
    }))
  },
  get (name) {
    const item = JSON.parse(sessionStorage.getItem(name))
    if (item) {
      return item.value
    }
    return null
  },
  remove (name) {
    sessionStorage.removeItem(name)
  }
}
