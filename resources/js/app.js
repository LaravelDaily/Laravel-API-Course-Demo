require('./bootstrap')

window.Vue = require('vue')
import VueRouter from 'vue-router'
import VueX from 'vuex'
import routes from './routes/index'


Vue.component('front-page', require('./components/Front.vue').default)
let categoriesCreate = Vue.component('categories-create', require('./components/CategoriesCreate.vue').default)
Vue.component('pagination', require('laravel-vue-pagination'))
Vue.component('app', require('./components/App.vue').default)


Vue.use(VueRouter)
Vue.use(VueX)

const router = new VueRouter({
  routes
})

const store = new VueX.Store({
  state: {
    user: null
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, data) {
      state.user = data
    }
  },
  actions: {
    getCSRF (state, data) {
      return axios.get('/sanctum/csrf-cookie')
    },
    setUserData (state, data) {
      state.commit('setUser', data)
    },
    retrieveUser (state, data) {
      console.log(state)
      return state.dispatch('getCSRF').then(() => {
        return axios.get('/api/user')
          .then((resp) => {
            state.dispatch('setUserData', resp.data)
          })
      })
    }
  }
})

const app = new Vue({
  router,
  store,
  el: '#app',
  components: {
    categoriesCreate: categoriesCreate
  }
})
