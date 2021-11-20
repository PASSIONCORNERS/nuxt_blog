export const state = () => ({
  isLoggedIn: false,
  user: null,
});
export const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  GET_USER(state, payload) {
    state.user = payload;
  },
};
export const actions = {
  login({ commit }) {
    commit("LOGIN");
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
  getUser({ commit }, payload) {
    // console.log("payload >>", payload);
    commit("GET_USER", payload);
  },
};
export const getters = {
  // example(state){}
};
