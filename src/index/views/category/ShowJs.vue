<template>
  <div>
      <div>{{blog.title}}</div>
      <article v-html="blog.contextvalue"></article>
  </div>
</template>

<script>

import * as fb from 'index/network/firebase'

export default {
    name:'ShowJs',
    data(){
        return{
            id:this.$route.params.id,
            blog:''
        }
    },
    created(){
        fb.blogsCollection.doc(this.id).get().then(doc =>{
            if(doc.exists){
                this.blog = doc.data()
            }
        })
    }
}
</script>

<style>

</style>