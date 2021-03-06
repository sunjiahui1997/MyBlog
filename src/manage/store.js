import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from './network/firebase'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    async login({
      dispatch
    }, form) {
      const {
        user
      } = await fb.auth.signInWithEmailAndPassword(form.email, form.password).catch(function (error) {
        alert('请输入正确的用户名密码哦！')
      })

      dispatch('fetchUserProfile', user)
      alert('登录成功')
      if (router.currentRoute.path === '/signup') {
        router.push('/backstage')
      }
    },
    async signup({
      dispatch
    }, form) {
      const {
        user
      } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        date: form.date,
        email: form.email
      })
      alert('注册成功！')
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({
      commit
    }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      commit('setUserProfile', userProfile.data())
    },
    async logout({
      commit
    }) {
      // log user out
      await fb.auth.signOut()
      // clear user data from state
      commit('setUserProfile', {})
      // redirect to login view
      router.push('/signup')
    }
  }
})