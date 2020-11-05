<template>
 <div>
     <img class="img" src="~manage/assets/2.jpg" alt="" href="/main">
     <tabbar class='content'>
         <div>
             <tabbar-item  class ='title' title = '写博客' path ='addblog'><router-link to ='/backstage/addblog'>写博客</router-link></tabbar-item>
          <tabbar-item  class ='title' title = '编辑博客' path ='editblog'><router-link to ='/backstage/editblog'>编辑博客</router-link></tabbar-item>
          <tabbar-item  class ='title'><router-link to ='/signup'>登录界面</router-link></tabbar-item>
          <tabbar-item  class ='title' title = '编辑博客' ><a href="/main">回到博客</a></tabbar-item>
          <tabbar-item  class ='title' title = '编辑博客' ><a @click='logout'>退出登录</a></tabbar-item>
         </div>
         <router-view id='view'></router-view>
         <!-- <tabbar-item>写博客</tabbar-item> -->
     </tabbar>
</div> 
</template>

<script>

import {mapState} from 'vuex'

import tabbar from './Tabbar'
import tabbarItem from './Tabbaritem'

export default {
    name:'Backstage',
    components:{
        tabbar,
        tabbarItem
    },
    computed:{
        ...mapState(['userProfile'])
    },
    methods:{
        addblog(){
            // this.$router.push('/addblog')
        },
        logout(){
            var r = confirm('确定退出？')
            if(r == true){
                this.$store.dispatch('logout')
            }else{

            }
        },
    }
}
</script>

<style scoped>
.content{
    display: flex;
}
.title{
    display: block;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}

a{
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
}
a:hover{
    background-color: #555;
    color: white;
}
#view{
    position: relative;
    left: 50px;
}
.img{
  width: 200px;
  height: 110px;
}
.img2{
    position: absolute;
    z-index: -1;
    opacity: 0.8;
    width: 50%;
    height: 50%;
    left: 1000px;
}
</style>