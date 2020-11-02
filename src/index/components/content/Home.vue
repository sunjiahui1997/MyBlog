<template>
    <div>
        <div class="content">
              <div class="post-title" v-for="blog in blogs" :key="blog.title">
                  <!-- <article v-html="blog.context"></article> -->
                  <h2 class="title"><router-link class="title2" :to="'/showblog/'+ blog.id">{{blog.title}}</router-link></h2> 
                  <div class="title1">Posted On <div class="time">{{blog.createdOn | day}}</div></div>
                  <article v-html="blog.contextvalue"></article>
                  <button class="but1"><router-link class="but2" :to="'/showblog/'+ blog.id">Read More  >></router-link></button>
              </div>   
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import * as fb from 'index/network/firebase'

export default {
    name:'Home',
    data(){
        return{
            blogs:'',
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


        fb.usersCollection.doc('AzzXqCkJ7fQAVsMnTKsvisjYXeh1')
        .collection('blogs')
        .get().then( qunerySnapshot =>{
              let queryBlog = []
            qunerySnapshot.forEach(doc => { ;
                const mydata = doc.data()
                mydata.id = doc.id            
                queryBlog.push(mydata)
                this.blogs = queryBlog
            })
        })
    },
    filters:{
        day(val){
            if(!val){return '-'}
            let data = val.toDate()
            return moment(data).format('YYYY-M-D')
        }
    },
    methods:{
    }
}

</script>

<style scoped>
.content{
    margin-top: 30px;
    margin-left: 20%;
    width: 700px;
    display: inline-block;
}
.post-title{
    color: #555;
    line-height: 1.2;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12), 0 -1px 0.5px 0 rgba(0,0,0,0.09);
    border-radius: initial;
    padding: 10px 20px;
    margin-bottom: 10px;
}
.title{
    text-align: center;
}
.title2{
  font-weight: 400;
  text-decoration: none;
  color: black;
}
.title2:hover{
    border-bottom: 2px solid black;
}
.title1{
    text-align: center;
    font-size: 6px;
    position: relative;
    top: -10px;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;;
}
.time{
    display: inline;
    text-align: center;
    font-size: 0.3em;
    position: relative;
    /* top: -10px; */
    border-bottom: black 1px dashed;
}
.but1{
    margin-top: 20px;
    position: relative;
    right: -200px;
    display: block;
    border: black 2px solid;
}
.but2{
    text-decoration: none;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    color: black;
    font-size: 10px;
}
.but1:hover{
     background-color: black;
    /* color: white; */
}
.but2:hover{
    color: white;
}
</style>