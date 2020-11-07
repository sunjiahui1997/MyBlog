<template>
  <div>
    <div class="lianjie">
      <div><a class="link" href="https://www.runoob.com/">菜鸟教程</a></div>
      <div>
        <a class="link" href="https://cn.vuejs.org/index.html">Vue.js</a>
      </div>
      <div>
        <a class="link" href="https://www.w3school.com.cn/">W3School</a>
      </div>
    </div>
    <div><img class="park" src="~index/assets/4-2.jpg" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.lianjie {
  /* width: 400px; */
  height: 50%;
  position: relative;
  top: 100px;
  left: 500px;
}
.link {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  margin: 10px 0px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
  font-size: 18px;
}
.park {
  position: absolute;
  top: 20px;
  opacity: 0.5;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>