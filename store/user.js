// this file is user store module.

export const state = () => ({
  username: 'satomikennta',
  age: 27
});

export const mutations = {
  setUsername(state, payload) {
    state.username = payload;
  },
  setAge(state, payload) {
    state.age = payload;
  }
}


export const actions = {
  // context means this module.
  // we can use actions to ajax requests or something related to user.
  changeUsername(context, payload) {
    context.commit('setUsername', payload);
  },
  changeAge(context, payload) {
    context.commit('setAge', payload);
  }
}