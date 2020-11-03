<template>
  <div id="app">
    <!-- <sign-up v-if='logIn' @login='login()' ></sign-up> -->
  <router-view></router-view>
  <div><router-link to="/signup">登录界面</router-link></div>
 <a href="/main">回到博客</a>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name:'App',
  data(){
    return{
      logIn:true,
      time: new Date(),
      time1:''
    }
  },
  created(){
    let now =moment().format("YYYY-M-D")
    this.time1 =now
  },
  components:{
  },
  methods:{
    login(){
      console.log('登录成功');
      // this.logIn = false
      // this.$route
    }
  },
  computed:{
    count(){
      return this.$store.state.userProfile
    }
  },
  filters:{
    day(val){
      if(!val){return'-'}
      let data = moment(val)
      return data.format("YYYY-M-D")
    }
  }
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
  opacity: 1;
}
::selection {
  background: #262a30;
  color: #fff;
}
</style>
