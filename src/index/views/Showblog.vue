<template>
  <div>
    <div class="blog">
      <div class="title">{{ blog.title }}</div>
      <div class="time">
        Post On {{ blog.createdOn | day }} | UpdateOn :
        {{ blog.updateOn | day }}
      </div>
      <article class="markdown-body" v-html="blog.contextvalue"></article>
    </div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

import "mavon-editor/dist/css/index.css";

export default {
  name: "profile",
  data() {
    return {
      id: this.$route.params.id,
      blog: []
    };
  },
  created() {
    fb.usersCollection
      .doc("AzzXqCkJ7fQAVsMnTKsvisjYXeh1")
      .collection("blogs")
      .doc(this.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.blog = doc.data();
        }
      });
  },
  methods: {},
  filters: {
    day(val) {
      if (!val) {
        return "-";
      }
      const h = val.seconds * 1000;
      var now = new Date(h);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var time = year + "-" + month + "-" + day;
      return time;
    }
  }
};
</script>

<style scoped>
.blog {
  position: relative;
  left: 300px;
  top: 50px;
  width: 700px;
}
.title {
  text-align: center;
  font-size: 26px;
  font-weight: 400;
}
.time {
  text-align: center;
  font-size: 12px;
  margin: 10px 0px 30px 0;
}
/* .markdown-body{ */
/* font-size: 14px; */
/* } */
</style>
