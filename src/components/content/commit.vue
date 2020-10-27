<template>
  <div>
<div v-if="!submmited">
  <div class="editBlog">编辑博客</div>
<div class="title">标题： <input type="text" placeholder="title" v-model="blog.title"></div>
<mavon-editor v-model="blog.context" @change="change"></mavon-editor>
<div class="title1">分类:  <input type="text" v-model="blog.category" ></div>
<button class="butcommit" @click.prevent="commitBlog">提交博客</button>
</div>
<div class="commited" v-if="submmited">博客提交成功<button class="butcommit" @click="submmited = !submmited">返回</button></div>
  </div>
</template>

<script>

// import * as fb from 'network/firebase.js'
import * as fb from 'network/firebase'

export default {
    name:'commitblogs',
    data(){
      return{
        blog:{
          title:'',
          context:'',
          category:''
        },
        html:'',
        submmited:false
      }
    },
    methods:{
      change(value,render){
        this.html = render
        // console.log(this.html);
      },
     commitBlog(){
        console.log(1234);
      fb.blogsCollection.add({
        title : this.blog.title,
        context: this.blog.context,
        contextvalue: this.html,
        category: this.blog.category
      }).then( docref =>{
        this.submmited = true
        this.blog = ''
        console.log('document written with ID:' ,docref.id);
      }).catch(error =>{
        console.log('Error adding document :' ,error);
      })
      }
    }
}
</script>

<style scoped>
.editBlog{
  display: inline-block;
  font-size: 40px;
  line-height: 70px;
  margin: 20px 0;
  padding-left: 200px;
}
.title{
  display: block;
  margin-bottom: 20px;
  margin-left: 200px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}
.title1{
   display: block;
   margin-bottom: 20px;
   margin-left: 200px;
   margin-top: 30px;
   font-size: 20px;
   font-family: 'Times New Roman', Times, serif;
}
input{
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  line-height: 30px;
  border-radius: 6px;
  outline: none;
}
.butcommit{
  display: inline-block;
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-left: 70%;
  text-decoration: none;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #8ac007;
  white-space: nowrap;
}
.butcommit:hover{
  cursor: pointer;
  background-color: honeydew;
  color: #8ac007;
}
.commited{
  display: flex;
  width: 300px;
  height: 100px;
  white-space: nowrap;
  background-color: #aaa;
}
</style>