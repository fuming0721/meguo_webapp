const state = {
  requestLoading: false
}

const getters = {
  requestLoading: state => state.requestLoading
}

const mutations = {
  SETRESLOADING (state, data) {
    state.requestLoading = data
  }
}

const actions = {
  setResLoading ({ commit }, data) {
    commit('SETRESLOADING', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
