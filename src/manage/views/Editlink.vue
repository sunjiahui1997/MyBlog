<template>
  <div>
    <h1>编辑链接</h1>
    <div class="item">
      <label for="desc">名称 : </label>
      <input type="text" id="desc" v-model="link.name" />
    </div>
    <div class="item">
      <label for="link">URL : </label>
      <input type="text" id="link" v-model="link.url" />
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
      link: "",
      id: this.$route.params.id
    };
  },
  created() {
    fb.linksCollection
      .doc(this.id)
      .get()
      .then(doc => {
        this.link = doc.data();
      });
  },
  methods: {
    addbut() {
      fb.linksCollection.update({
        name: this.link.name,
        url: this.link.url
      });
      alert("修改成功！");
      this.$router.push("/backstage/showlink");
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