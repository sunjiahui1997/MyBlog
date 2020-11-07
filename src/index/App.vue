<template>
  <div id="app">
    <div class="header">
      <div class="header-inner">
        <div id="custom-logo-site-title" @click="backhome">
          <span id="blog-name">SJH's blog</span>
        </div>
        <meau>
          <meau-item title="首页" path="/main">
            <template v-slot:item-ico
              ><img class="icon" src="~index/assets/首页.svg" alt=""
            /></template>
            <template v-slot:item-text class="mean-item">首页</template>
          </meau-item>
          <meau-item title="分类" path="/category">
            <template v-slot:item-ico
              ><img class="icon" src="~index/assets/分类.svg" alt=""
            /></template>
            <template v-slot:item-text class="mean-item">分类</template>
          </meau-item>
          <meau-item title="关于" path="/About">
            <template v-slot:item-ico
              ><img class="icon" src="~index/assets/我的.svg" alt=""
            /></template>
            <template v-slot:item-text class="mean-item">关于</template>
          </meau-item>
          <meau-item title="归档" path="/profile">
            <template v-slot:item-ico
              ><img class="icon" src="~index/assets/课程.svg" alt=""
            /></template>
            <template v-slot:item-text class="mean-item">留言</template>
          </meau-item>
        </meau>
        <a class="back" href="/manage.html">进入后台</a>
      </div>
    </div>
    <!-- <router-link to='/About'>1234</router-link> -->
    <div class="main">
      <router-view></router-view>
      <img class="guofu" src="~index/assets/3.jpg" alt="" />
      <back-top></back-top>
    </div>
  </div>
</template>

<script>
import meauItem from "index/components/header/meauItem";
import meau from "index/components/header/meau";
import backTop from "index/components/common/BackTop";

export default {
  name: "App",
  components: {
    meauItem,
    meau,
    backTop
  },
  methods: {
    backhome() {
      this.$router.push({ path: "/main" });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
}
.header-inner {
  display: flex;
  padding: 25 0 20 0;
  margin: 0 200px;
}
#custom-logo-site-title {
  position: relative;
  right: 100px;
  cursor: pointer;
}
#blog-name {
  font-size: 1.5em;
}
.icon {
  position: relative;
  top: 4px;
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 5px;
}
.main {
  width: 100%;
  height: 1000px;
}
.header {
  background-color: #f5f5f5;
  opacity: 1;
}
::selection {
  background: #262a30;
  color: #fff;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.back {
  font-size: 14px;
  position: relative;
  left: 500px;
  color: #262a30;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 2;
}
.back:hover {
  background-color: #ccc;
}
.guofu {
  width: 120px;
  height: 150px;
  position: absolute;
  left: 50px;
  top: 100px;
}
</style>


