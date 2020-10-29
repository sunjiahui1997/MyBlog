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

import * as fb from 'index/network/firebase'

export default {
    name:'Home',
    data(){
        return{
            blogs:null,
            // defaultData: "preview"
        }
    },
    created(){
        // var first = fb.blogsCollection.orderBy('category').limit(2)

        // console.log(first);

        // return first.get().then(function (documentSnapshots) {
          // Get the last visible document
        //   var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //   console.log("last", lastVisible);
        
          // Construct a new query starting at this document,
          // get the next 25 cities.
        //   var next = fb.blogsCollection.orderBy('category').startAfter(lastVisible).limit(2)
        //   console.log(next);
        // });


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