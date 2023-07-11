import Vuex from "vuex";
import layout from "./layout";
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      layout: layout,
    },
  });
};
export default createStore;
