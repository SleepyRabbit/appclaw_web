/**
 * Created by houenxing on 17/1/19.
 */
'use strict';

const state = {
    jwt: "",
    appVersion: ""
  };

const mutations = {
  setJwt(state, data) {
    state.jwt = data;
  },
  setVersion(state, data) {
    state.appVersion = data;
  }
};

const actions = {
  setJwt: ({commit}, data) => {
    commit('setJwt', data);
  },
  setVersion: ({commit}, data) => {
    commit('setVersion', data);
  }
};

const getters = {
  getJwt: (state) => state.jwt,
  getAppVersion: (state) => state.appVersion,
};

export default {
  state,
  mutations,
  actions,
  getters,
}
