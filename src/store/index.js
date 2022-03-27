import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
    cuadrado(state){
      return state.counter * state.counter;
    }
  },
  mutations: {
    subirCounter(state, random) {
      state.counter += random;
    },
    bajarCounter(state, random) {
      state.counter -= random;
    },
  },
  actions: {
    async subirCounter({ commit }) {
      const res= await fetch("https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new");
      const result = await res.json();
      console.log(result);
      commit("subirCounter", result);
    },

    async bajarCounter({ commit }) {
      const res= await fetch("https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new");
      const result = await res.json();
      console.log(result);
      commit("bajarCounter", result);
    },
  },
  modules: {
  }
})
