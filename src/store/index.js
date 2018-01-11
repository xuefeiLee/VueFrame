import Vue from 'vue'
import Vuex from 'vuex'
import rackPoint from './rackPoint/rackPoint'
import work from './work/work'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    rackPoint: rackPoint,
    work: work
  }
})
