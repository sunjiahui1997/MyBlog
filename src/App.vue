<template>
  <div id="app">
    <div class="header">
      <div class="header-inner">
      <div id="custom-logo-site-title">
        <span id='blog-name'>SJH's blog</span>
      </div>
      <meau>
        <meau-item title='首页' path = '/main'>
          <template v-slot:item-ico><img class='' src="~assets/首页.svg" alt=""></template>
          <template v-slot:item-text class='mean-item'>首页</template>
        </meau-item>
        <meau-item title='分类' path = '/category'>
          <template v-slot:item-ico><img class='' src="~assets/分类.svg" alt=""></template>
          <template v-slot:item-text class='mean-item'>分类</template>
        </meau-item>
        <meau-item title='关于' path = '/About'>
          <template v-slot:item-ico><img class='' src="~assets/我的.svg" alt=""></template>
          <template v-slot:item-text class='mean-item'>关于</template>
        </meau-item>
        <meau-item title = '归档' path = '/profile'>
          <template v-slot:item-ico><img class='' src="~assets/课程.svg" alt=""></template>
          <template v-slot:item-text class='mean-item'>归档</template>
        </meau-item>
        <meau-item title = '写博客' path = '/commit'>
          <template v-slot:item-ico><img class='' src="~assets/消息.svg" alt=""></template>
          <template v-slot:item-text class='mean-item'>写博客</template>
        </meau-item>
      </meau>
      </div>
    </div>
    <!-- <router-link to='/About'>1234</router-link> -->
    <div class="main">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import meauItem from 'components/header/meauItem'
import meau from 'components/header/meau'

export default {
  name: 'App',
  components: {
    meauItem,
    meau
  }
}
</script>

<style>
  .body{
    margin: 0;
    padding: 0;
  }
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height:90px;
  }
  .header-inner{
    display: flex;
    padding: 25 0 20 0;
    margin:0 200px ;
  }
  #custom-logo-site-title{
    position: relative;
    right: 100px;
    cursor: pointer;
  }
  #blog-name{
    font-size: 1.5em;
  }
  img{
    width: 25px;
    height: 25px;
  }
  .main{
    width: 100%;
    height: 1000px;
  }
</style>


