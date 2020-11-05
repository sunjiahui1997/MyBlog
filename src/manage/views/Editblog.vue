<template>
  <div>
    <div class="context">
      <!-- {{this.blogcontext}} -->
      <div class="boke" v-for="blogs in blog" :key="blogs.title">
  <div>
    <h3>博客标题：{{ blogs.title }}</h3>
    <div v-html="$options.filters.msg(blogs.contextvalue || '')"></div>
  </div>
  <div class="hh">
    <router-link :to="'/backstage/edititem/' + blogs.id">
      <button class="title">修改</button></router-link
    >
    <button class="title" @click="deletaBlog(blogs.id)">删除</button>
  </div>
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
      blogcontext:'',
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
  computed:{
    async chuli(){
      const x = await this.blog.contextvalue
      console.log(x);
    }
  },
  filters: {
    simplify(val) {
      return val.slice(1, 45) + "...";
    },
     msg(msg){
       
      return msg.slice(0,50)
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
    color: #555;
  line-height: 1.2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
  padding: 10px 20px;
  margin-bottom: 10px;
}
.hh {
  display: flex;
  /* position: relative; */
  /* left: 200px; */
  /* top: 30px; */
  position: absolute;
  right:10px;
  margin-top: 20px;
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
.context{
  position: relative;
  top: -80px;
}
</style>