<template>
    <div>
        <div>博客的展示</div>
         <article class="markdown-body" v-html="blog.contextvalue"></article>
        <button @click.prevent="deleteBlogs"><a href="">删除博客</a></button>
        <!-- <button><router-link :to="'/edit/'+id">编辑博客</router-link></button> -->
    </div>
</template>

<script>

import * as fb from 'index/network/firebase'

// import "mavon-editor/dist/css/index.css"

export default {
    name:'profile',
    data(){
        return{
            id:this.$route.params.id,
            blog:[]
        }
    },
    created(){
        fb.blogsCollection.doc(this.id).get().then(doc =>{
            if(doc.exists){
                // console.log(doc.data());
                this.blog = doc.data()
            }
        })
    },
    methods:{
        deleteBlogs(){
            fb.blogsCollection.doc(this.id).delete().then(()=>{
                // console.log('删除成功');
                this.$router.push({path:'/main'})
            })
        },
    }
}
</script>

<style>

</style>
