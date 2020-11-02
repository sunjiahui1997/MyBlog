<template>
  <div>
    <div>博客的展示</div>
    <article class="markdown-body" v-html="blog.contextvalue"></article>
    <!-- <button><router-link :to="'/edit/'+id">编辑博客</router-link></button> -->
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

// import "mavon-editor/dist/css/index.css"

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
          // console.log(doc.data());
          this.blog = doc.data();
        }
      });
  },
  methods: {}
};
</script>

<style>
</style>
