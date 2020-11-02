<template>
  <div>
    <div>标题</div>
    <div>{{ nihao | simplify }}</div>
    <div class="boke" v-for="blogs in blog" :key="blogs.title">
      <div>
        <div>博客标题：{{ blogs.title }}</div>
        <div v-html="blogs.contextvalue"></div>
        <hr id="xian" />
      </div>
      <div class="hh">
        <router-link :to="'/backstage/edititem/' + blogs.id">
          <button class="title">修改</button></router-link
        >
        <button class="title" @click="deletaBlog(blogs.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "editblog",
  data() {
    return {
      blog: [],
      nihao:
        "假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容假内容"
    };
  },
  created() {
    fb.usersCollection
      .doc(fb.auth.currentUser.uid)
      .collection("blogs")
      .get()
      .then(querySnapshot => {
        const queryblog = [];
        querySnapshot.forEach(doc => {
          const mydata = doc.data();
          mydata.id = doc.id;
          queryblog.push(mydata);
          this.blog = queryblog;
        });
      });
  },
  filters: {
    simplify(val) {
      return val.slice(1, 45) + "...";
    }
  },
  methods: {
    deletaBlog(id) {
      const r = confirm("确认删除？");
      if (r == true) {
        fb.usersCollection
          .doc(fb.auth.currentUser.uid)
          .collection("blogs")
          .doc(id)
          .delete()
          .then(() => {
            alert("删除成功！");
          })
          .catch(error => {
            console.log(error);
          });
      }else{
        
      }
    }
  }
};
</script>

<style scoped>
.boke {
  display: flex;
}
.hh {
  display: flex;
  position: relative;
  left: 200px;
  top: 30px;
}
.title {
  display: inline-block;
  text-align: center;
  margin-right: 10px;
  padding: 0;
  width: 40px;
  background-color: #f1f1f1;
  height: 30px;
  display: block;
  color: #000;
  /* padding: 8px 16px; */
  text-decoration: none;
  font-size: 10px;
}
.title:hover {
  background-color: #555;
  color: white;
}
a {
  text-decoration: none;
}
hr {
  position: relative;
  top: -10px;
  width: 500px;
}
</style>