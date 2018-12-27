export default {
  set (name, value) {
    localStorage.setItem(name, JSON.stringify({
      value: value
    }))
  },
  get (name) {
    const item = JSON.parse(localStorage.getItem(name))
    if (item) {
      return item.value
    }
    return null
  },
  remove (name) {
    localStorage.removeItem(name)
  }
}
