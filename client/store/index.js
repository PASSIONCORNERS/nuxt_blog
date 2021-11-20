const jwt = require("jsonwebtoken");
// const axios = require("axios");

export const actions = {
  async nuxtServerInit({ commit }) {
    const accToken = this.$cookies.get("app.vnblog.tk");
    if (accToken) {
      let user = jwt.verify(accToken, process.env.ACCESSTOKEN);
      if (user) {
        // login user
        commit("auth/LOGIN");
        // get user
        // commit("auth/GET_USER");
      }
    }
  },
};
