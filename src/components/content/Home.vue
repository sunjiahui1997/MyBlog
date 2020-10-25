<template>
    <div>
        <div>博客展示</div>
        <ul v-for="blog in blogs" :key="blog.title">
            <li><div><router-link :to="'/profile/'+ blog.id">{{blog.title}}</router-link></div>  <div>{{blog.context}}</div>   <div>{{blog.category}}</div> </li>
        </ul>
        <!-- <ui v-for="blog in blogs" :key="blog.title"> -->
            <!-- <li>{{blog.title}}</li> -->
        <!-- </ui> -->
        <!-- <div>{{blogs.title}}{{blogs.context}}{{bolgs.category}}</div> -->
    </div>
</template>

<script>

import * as fb from 'network/firebase'

export default {
    name:'Home',
    data(){
        return{
            blogs:null
        }
    },
    created(){
        fb.blogsCollection.get().then( qunerySnapshot =>{
              let queryBlog = []
            qunerySnapshot.forEach(doc => { 
                // console.log(doc.id, " => ", doc.data());
                const mydata = doc.data()
                mydata.id = doc.id
                // console.log(mydata);               
                queryBlog.push(mydata)
                // console.log(queryBlog);
                this.blogs = queryBlog
                // console.log(this.blogs); 
            })
        })
    },
}

</script>

<style>

</style>