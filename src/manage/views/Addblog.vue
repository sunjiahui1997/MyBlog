<template>
  <div>
    <div class="context">
          <div v-if="!submmited">
      <div class="editBlog">编辑博客</div>
      <div class="title">
        标题：
        <input
          id="nihao"
          type="text"
          placeholder="title"
          v-model="blog.title"
        />
      </div>
      <mavon-editor v-model="blog.context" @change="change"></mavon-editor>
      <div class="title1">
        分类:
        <input type="checkbox" id="Vue" value="Vue" v-model="blog.categories" />
        <label for="Vue">Vue</label>
        <input
          type="checkbox"
          id="JavaScript"
          value="JavaScript"
          v-model="blog.categories"
        />
        <label for="JavaScript">JavaScript</label>
        <input
          type="checkbox"
          id="Java"
          value="Java"
          v-model="blog.categories"
        />
        <label for="Java">Java</label>
        <input type="checkbox" id="PHP" value="PHP" v-model="blog.categories" />
        <label for="PHP">PHP</label>
      </div>
      <button class="butcommit" @click.prevent="commitBlog">提交博客</button>
    </div>
    <div class="commited" v-if="submmited">
      博客提交成功<button class="butcommit" @click="submmited = !submmited">
        返回
      </button>
    </div>
    <a href="/manage.html">回到后台主页</a>
    </div>
  </div>
</template>

<script>

import * as fb from '../network/firebase'

export default {
  name: "commitblogs",
  data() {
    return {
      blog: {
        title: "",
        context: "",
        categories: []
      },
      html: "",
      submmited: false
    };
  },
  methods: {
    change(value, render) {
      this.html = render;
      // console.log(this.html);
    },
    commitBlog() {
      fb.usersCollection
        .doc(fb.auth.currentUser.uid)
        .collection("blogs")
        .add({
          createdOn: new Date(),
          updateOn :new Date(),
          title: this.blog.title,
          context: this.blog.context,
          contextvalue : this.html,
          categories: this.blog.categories
        });
        this.submmited = true
        this.blog =''
    }
  }
};
</script>

<style scoped>
.context{
  position: relative;
  top: -99px;
}
.editBlog {
  display: inline-block;
  font-size: 40px;
  line-height: 70px;
  margin: 20px 0;
  padding-left: 30px;
}
.title {
  display: block;
  margin-bottom: 20px;
  margin-left: 30px;
  font-size: 20px;
  /* font-family: 'Times New Roman', Times, serif;   */
}
.title1 {
  display: block;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
}
input {
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  line-height: 30px;
  border-radius: 6px;
  outline: none;
}
.input {
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  line-height: 30px;
  border-radius: 6px;
  outline: none;
}
.butcommit {
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
.butcommit:hover {
  cursor: pointer;
  background-color: black;
  color:white;
}
.commited {
  position: relative;
  top: 200px;
  display: block;
}
input {
  width: 30px;
  height: 30px;
}
label {
  padding-right: 5px;
}
#nihao {
  width: 170px;
}
</style>
