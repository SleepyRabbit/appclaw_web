/**
 * Created by houenxing on 17/1/19.
 */
'use strict';

const state = {
    jwt: "",
  };

const mutations = {
  setJwt(state, data) {
    state.jwt = data;
  },
};

const actions = {
  setJwt: ({commit}, data) => {
    commit('setJwt', data);
  },
};

const getters = {
  getJwt: (state) => state.jwt,
};

export default {
  state,
  mutations,
  actions,
  getters,
}
