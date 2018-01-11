import * as types from './mutations_types'
import Service from '../../common/http'
export default {
  state: {
    point: 5,
    all: '',
    progress: '',
    complete: '',
    page: {
      all: 1,
      progress: 1,
      complete: 1
    }
  },
  getters: {
    progressList (state) {
      let proList = state.all
      let list = []
      for (let i = 0; i < proList.length; i++) {
        if (proList[i].date !== '已邀约') {
          list.push(proList[i])
        }
      }
      state.all = list
      return state.all
    },
    completeList (state) {
      let proList = state.all
      let list = []
      for (let i = 0; i < proList.length; i++) {
        if (proList[i].date === '已邀约') {
          list.push(proList[i])
        }
      }
      state.all = list
      return state.all
    }
  },
  mutations: {
    [types.rackPointAll] (state, payload) {
      state.all = payload
    },
    [types.rackPointProgress] (state, payload) {
      state.all = payload
    },
    [types.rackPointComplete] (state, payload) {
      state.all = payload
    },
    [types.changePage] (state, payload) {
      state.page[payload.type] = payload.count
    }
  },
  actions: {
    [types.rackPointAll] ({commit}) {
      Service.get('static/data.json').then((data) => {
        commit(types.rackPointAll, data.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    [types.rackPointProgress] ({commit}) {
      Service.get('static/data.json').then((data) => {
        commit(types.rackPointProgress, data.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    [types.rackPointComplete] ({commit}) {
      Service.get('static/data.json').then((data) => {
        commit(types.rackPointComplete, data.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    [types.changePage] ({commit}, data) {
      commit(types.changePage, data)
    }
  }
}
