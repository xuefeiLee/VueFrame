import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/work',
      name: 'Home',
      component: resolve => {
        require.ensure(['../views/Home.vue'], () => {
          resolve(require('../views/Home.vue'))
        })
      },
      beforeEnter: (to, from, next) => {
        var getUser = localStorage.getItem('user')
        if (getUser) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          // 账单
          path: 'accountBill',
          name: 'AccountBill',
          component: resolve => {
            require.ensure(['../views/AccountBill.vue'], () => {
              resolve(require('../views/AccountBill.vue'))
            })
          }
        },
        {
          // 结算
          path: 'accountSettlement',
          name: 'AccountSettlement',
          component: resolve => {
            require.ensure(['../views/AccountSettlement.vue'], () => {
              resolve(require('../views/AccountSettlement.vue'))
            })
          }
        },
        {
          // 客户
          path: 'client',
          name: 'Client',
          component: resolve => {
            require.ensure(['../views/Client.vue'], () => {
              resolve(require('../views/Client.vue'))
            })
          }
        },
        {
          // 发票
          path: 'invoice',
          name: 'Invoice',
          component: resolve => {
            require.ensure(['../views/Invoice.vue'], () => {
              resolve(require('../views/Invoice.vue'))
            })
          }
        },
        {
          // 赔案
          path: 'payCase',
          name: 'PayCase',
          component: resolve => {
            require.ensure(['../views/PayCase.vue'], () => {
              resolve(require('../views/PayCase.vue'))
            })
          }
        },
        {
          // 排分
          path: 'rackPoint',
          name: 'RackPoint',
          component: resolve => {
            require.ensure(['../views/RackPoint.vue'], () => {
              resolve(require('../views/RackPoint.vue'))
            })
          }
        },
        {
          // 影像
          path: 'shadow',
          name: 'Shadow',
          component: resolve => {
            require.ensure(['../views/Shadow.vue'], () => {
              resolve(require('../views/Shadow.vue'))
            })
          }
        },
        {
          // 统计
          path: 'statistics',
          name: 'Statistics',
          component: resolve => {
            require.ensure(['../views/Statistics.vue'], () => {
              resolve(require('../views/Statistics.vue'))
            })
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require.ensure(['../views/Login.vue'], () => {
          resolve(require('../views/Login.vue'))
        })
      },
      beforeEnter: (to, from, next) => {
        var getUser = localStorage.getItem('user')
        if (getUser) {
          next('/')
        } else {
          next()
        }
      }
    },
    { path: '*', redirect: '/work' }
  ]
})
