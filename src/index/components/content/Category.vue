<template>
  <div>
    <div class="content-warp">
      <h2 class="title">Categories</h2>
      <div class="category-title">目前只有{{categories.length}}个分类</div>
      <div v-for="(item) in categories" :key="item.name">
        <a><router-link :to="'/showcate/' + item.name">{{item.name}}</router-link></a>
        <!-- <div>{{item.name}}</div> -->
      </div>
    </div>

  </div>
</template>

<script>
import * as fb from "index/network/firebase";

export default {
  data() {
    return {
      categories:''
    };
  },
  created() {
    fb.categoryCollection
      .orderBy("date")
      .get()
      .then(qunerySnapshot => {
        const x = [];
        qunerySnapshot.forEach(doc => {
          // console.log(doc.data());
          x.push(doc.data());
          this.categories = x;
          // console.log(this.categories);
        });
      });
  },
  methods: {}
};
</script>

<style scoped>
.content-warp {
  height: 700px;
  width: 580px;
  margin-top: 100px;
  margin-left: 30%;
}
.category-title {
  text-align: center;
  display: block;
  line-height: 2;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 14px;
  color: #555;
}

.title {
  font-size: 26px;
  font-weight: 400;
  line-height: 50px;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  cursor: pointer;
}
.title:before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
}
a {
  /* border-bottom-color: #ccc; */
  color: #555;
  text-decoration: none;
  border-bottom: #ccc 1px solid;
  cursor: pointer;
  line-height: 2;
  background-color: transparent;
  margin: 10px 0;
}
.title:after {
  content: " ";
  position: absolute;
  width: 100%;
  top: 100%;
  height: 2px;
  color: #555;
  transition: all 0.2s;
}
.title:hover:after {
  left: 0%;
  width: 100%;
}
a:hover {
  border-bottom: 1px black solid;
}
</style>
