<template>
  <div>
    <div class="context">
          <div v-if="!submmited">
      <div class="editBlog">修改博客</div>
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
      <div>更改日期：</div>
      <button class="butcommit" @click.prevent="commitBlog">提交更改</button>
    </div>
    <div class="commited" v-if="submmited">
      博客修改成功<button class="butcommit" @click='backstage()'>
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
      html: "",
      submmited: false,
      id:this.$route.params.id,
      blog:[],
      category:'',

    };
  },
  created(){
      fb.usersCollection.doc(fb.auth.currentUser.uid).collection('blogs').doc(this.id).get().then( doc =>{
    // console.log(doc.data(),1234);
    this.blog = doc.data()
    const nihao = doc.data().categories
    // console.log(this.category,12345);
    this.category = nihao.toString()
    // console.log(this.category);
    })
  },
  methods: {
  change(value, render) {
    this.html = render;
    // console.log(this.html);
  },
  commitBlog(){
      fb.usersCollection.doc(fb.auth.currentUser.uid).collection('blogs').doc(this.id).update({
          title:this.blog.title,
          context:this.blog.context,
          contextvalue:this.html,
          updataOn: new Date(),
          categories: fb.hhh.arrayUnion(this.category)
        //   categories: fb.FieldValue.arrayUnion(this.blog.categories.toString())
      })
      this.submmited = true
  },
  backstage(){
    this.$router.push('/backstage/editblog')
},
  }
}
</script>

<style scoped>
.context{
  position: relative;
  top: -150px;
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
  color: black;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-left: 70%;
  text-decoration: none;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color:#f1f1f1;
  white-space: nowrap;
}
.butcommit:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
.commited {
  display: flex;
  width: 300px;
  height: 100px;
  white-space: nowrap;
  background-color: #aaa;
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
