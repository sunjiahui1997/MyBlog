<template>
  <div>
    <h1>编辑分类</h1>
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
      cate: {
        name: ""
      }
    };
  },
  methods: {
    addbut() {
      fb.categoryCollection.add({
        name: this.cate.name,
        date: new Date()
      });
      alert("添加成功！");
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