<template>
  <div>
<div v-if="!submmited">
  <div>编辑博客</div>
<div>标题：<input type="text" placeholder="title" v-model="blog.title"></div>
<textarea name="" id="" cols="30" rows="10" v-model="blog.context"></textarea>
<div>分类<input type="text" v-model="blog.category"></div>
<button @click.prevent="commitBlog">提交博客</button>
<div>数据展示
  {{blog.title}}
</div>
</div>
<div v-if="submmited">博客提交成功<button @click="submmited = !submmited">返回</button></div>
  </div>
</template>

<script>

// import * as fb from 'network/firebase.js'
import * as fb from 'index/network/firebase'

export default {
    name:'commitblogs',
    data(){
      return{
        blog:[],
        submmited:false,
        id:this.$route.params.id
      }
    },
    methods:{
     commitBlog(){
        // console.log(1234);
      fb.blogsCollection.add({
        title : this.blog.title,
        context: this.blog.context,
        category: this.blog.category
      }).then( docref =>{
        this.submmited = true
        this.blog = ''
        console.log('document written with ID:' ,docref.id);
      }).catch(error =>{
        console.log('Error adding document :' ,error);
      })
      }
    },
      created(){  
      console.log(this.id);
      fb.blogsCollection.doc('this.id').get().then(doc =>{
          if (doc.exists) {
              this.blog = doc.data()
              console.log(this.blog);
          }
      })
  },
}
</script>

<style>

</style>