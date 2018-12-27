const state = {
  userInfo: null
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  SETUSERINFO (state, data) {
    state.userInfo = data
  }
}
const actions = {
  setSetUserInfo ({ commit }, data) {
    commit('SETUSERINFO', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
