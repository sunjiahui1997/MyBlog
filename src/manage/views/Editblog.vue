<template>
  <div>
    <div v-for="blogs in blog" :key="blogs.title">
      <div>
        <router-link :to="'/backstage/edititem/' + blogs.id">{{ blogs.title }}</router-link>
        <div v-html="blogs.contextvalue"></div>
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
      blog: []
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
            // console.log(doc.id);
          const mydata = doc.data();
          mydata.id = doc.id;
          queryblog.push(mydata);
        //   console.log(mydata.id);
          this.blog = queryblog;
        });
      });
  }
};
</script>

<style>
</style>