<template>
    <div>
        <div class="content">
              <div class="post-title" v-for="blog in blogs" :key="blog.title">
                  <!-- <article v-html="blog.context"></article> -->
                  <h2><router-link :to="'/profile/'+ blog.id">{{blog.title}}</router-link></h2> 
                  <article v-html="blog.contextvalue"></article>
              </div>   
        </div>
    </div>
</template>

<script>

import * as fb from 'network/firebase'

export default {
    name:'Home',
    data(){
        return{
            blogs:null,
            // defaultData: "preview"
        }
    },
    created(){
        fb.blogsCollection.get().then( qunerySnapshot =>{
              let queryBlog = []
            qunerySnapshot.forEach(doc => { ;
                const mydata = doc.data()
                mydata.id = doc.id            
                queryBlog.push(mydata)
                this.blogs = queryBlog
            })
        })
    },
}

</script>

<style scoped>
.content{
    margin-top: 100px;
    margin-left: 20%;
    width: 600px;
}
.post-title{
    color: #555;
    line-height: 1.2;
    
}

</style>