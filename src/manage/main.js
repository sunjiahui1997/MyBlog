import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  auth
} from './network/firebase'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.use(mavonEditor)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})