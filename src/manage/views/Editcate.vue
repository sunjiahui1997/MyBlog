<template>
  <div>
    <h1>修改分类</h1>
    <div class="item">
      <label for="desc">分类名 : </label>
      <input type="text" id="desc" v-model="cate.name" />
    </div>
    <button @click="addbut">添加</button>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "addlink",
  data() {
    return {
      cate: '',
      id:this.$route.params.id
    };
  },
  created() {
    fb.categoryCollection
      .doc(this.id)
      .get()
      .then(doc => {
        // console.log(doc.data(),1234);
        this.cate = doc.data();
      });
  },
  methods: {
    addbut() {
      fb.usersCollection
        .doc(fb.auth.currentUser.uid)
        .collection("categories")
        .doc(this.id)
        .update({
          name: this.cate.name,
          date: new Date()
        });
      alert("更新成功！");
      this.$router.push("/backstage/showcate");
    }
  }
};
</script>

<style scoped>
.item {
  margin: 50px 0;
}
input {
  width: 400px;
  height: 30px;
  border-radius: 15px;
  transition: all 0.2s;
  padding: 5px 10px;
  font-size: 16px;
  outline: none;
}
input:focus {
  border: 1px solid goldenrod;
}
button {
  width: 70px;
  height: 30px;
  display: inline-block;
  color: rgb(8, 8, 8);
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-left: 70%;
  text-decoration: none;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #f1f1f1;
  white-space: nowrap;
}
button:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
</style>