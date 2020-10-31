<template>
  <div id="app">
    <!-- <sign-up v-if='logIn' @login='login()' ></sign-up> -->
  <router-view></router-view>
 <a href="/main">回到博客</a>
  </div>
</template>

<script>


export default {
  name:'App',
  data(){
    return{
      logIn:true,
    }
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
  }
}
</script>

<style scoped>
body{
  width: 100%;
  height: 100%;
}
</style>
