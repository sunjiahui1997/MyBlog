<template>
  <div>
      <link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">
    <div class="blog">
      <div class="title">{{ blog.title }}</div>
      <div class="time">Post On {{ blog.createdOn | day }}</div>
      <article
        class="markdown-body"
        v-html="blog.contextvalue"
      ></article>
    </div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";
import moment from "moment";

export default {
  name: "ShowJs",
  data() {
    return {
      id: this.$route.params.id,
      blog: ""
    };
  },
  created() {
    fb.blogsCollection
      .doc(this.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.blog = doc.data();
        }
      });
  },
   filters: {
   day(val) {
     if (!val) {
       return "-";
     }
     const x = val.toDate();
     return moment(x).format("YYYY-M-D");
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
  font-size: 9px;
  margin: 10px 0px 30px 0;
}
</style>