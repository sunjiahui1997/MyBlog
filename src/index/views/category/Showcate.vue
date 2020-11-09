<template>
  <div>
    <div class="content-warp">
      <div class="title">{{ name }}分类</div>
      <div v-for="item in categories" :key="item.title" class="cate-item">
        <div>
          <router-link :to="'/show/' + item.id">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

export default {
  name: "showcate1",
  data() {
    return {
      name: this.$route.params.cate,
      categories: ""
    };
  },
  created() {
    fb.blogsCollection
      .where("categories", "array-contains", this.name)
      .get()
      .then(qunerySnapshot => {
        // console.log(qunerySnapshot.empty);
        if (!qunerySnapshot.empty) {
          const x = [];
          qunerySnapshot.forEach(doc => {
            const y = doc.data();
            // console.log(y);
            y.id = doc.id;
            x.push(y);
            this.categories = x;
          });
        } else {
          alert("该文档不存在,请添加");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.content-warp {
  width: 580px;
  margin-top: 100px;
  margin-left: 30%;
}
.title {
  font-size: 26px;
  font-weight: 400;
  line-height: 50px;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  margin-bottom: 20px;
}
a {
  border-bottom-color: #ccc;
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  cursor: pointer;
  line-height: 2;
  background-color: transparent;
  margin: 10px 0;
}
a:hover {
  border-bottom-color: black;
}
.cate-item {
  position: relative;
  right: -20px;
  top: 20px;
}
</style>