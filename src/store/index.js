import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
    state() {
      // if(localStorage.getItem('storedState')){
      //   return JSON.parse(localStorage.getItem('storedState'));
      // }
      return {
        cart: [],
        total: 0,
        qty: 0,
        nextId: 4,
        msg: "",
        products: null,
    };
},
mutations: rootMutations,
actions: rootActions,
getters: rootGetters,
});

export default store;