<template>
  <div>
    <h1 class="title">常用网站</h1>
    <div class="lianjie" v-for="link in name" :key="link.url">
  <div class="link">
    <a :href="link.url">{{ link.name }}</a>
  </div>
</div>
    <div><img class="park" src="~index/assets/4-2.jpg" alt="" /></div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

export default {
  name: "About",
  data() {
    return {
      name: ""
    };
  },
  created() {
    fb.linksCollection
      .orderBy("date")
      .get()
      .then(qunerySnapshot => {
        const x = [];
        qunerySnapshot.forEach(doc => {
          console.log(doc.data());
          x.push(doc.data());
          this.name = x;
        });
      });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  transition: all .3s;
  font-size: 22px;
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
a:hover{
  border-bottom: brown 1px solid;
}
.title{
  position: relative;
  right: -500px;
  top:100px;
}
</style>