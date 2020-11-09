<template>
  <div>
    <div>
      <h1>个人信息</h1>
      <div class="item">用户名 ：{{ profile.name }}</div>
      <div class="item">邮箱 ：{{ profile.email }}</div>
      <div class="item">注册时间 ： {{ profile.date | day }}</div>
    </div>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "userprofile",
  data() {
    return {
      profile: ""
    };
  },
  created() {
    fb.usersCollection
      .doc(fb.auth.currentUser.uid)
      .get()
      .then(doc => {
        console.log(doc.data());
        this.profile = doc.data();
      });
  },
  filters: {
    day(val) {
      const x = new Date(val.seconds * 1000);
      return x;
    }
  }
};
</script>

<style scoped>
.item{
    padding: 20px 0;
}


</style>