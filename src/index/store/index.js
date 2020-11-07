import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from 'index/network/firebase'
import router from 'index/router/index'

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
        alert('请输入正确的用户名和密码')
      })

      dispatch('fetchUserProfile', user)
      alert('登录成功')
    },
    async signup({
      dispatch
    }, form) {
      const {
        user
      } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      await fb.touristCollection.doc(user.uid).set({
        name: form.name
      }).catch(function (error) {
        alert('该邮箱已注册！')
      })
      alert('注册成功！')
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({
      commit
    }, user) {
      const userProfile = await fb.touristCollection.doc(user.uid).get()
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
      alert('退出成功！')
    }
  },
  modules: {}
})