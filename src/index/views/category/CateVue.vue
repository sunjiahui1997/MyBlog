<template>
    <div>
        <div class="content-warp">
            <div class="title">Vue分类</div>
              <div v-for="blogs in blog" :key="blogs.title">
            <div><router-link :to="'/ShowVue/' + blogs.id">{{blogs.title}}</router-link></div>
           </div>
        </div>
    </div>
</template>

<script>

import * as fb from 'index/network/firebase'

export default {
    name:'CateVue',
    data(){
        return{
            blog:[]
        }
    },
    created(){
        fb.blogsCollection.where('category' , 'array-contains','Vue').get().then( querySnapshot =>{
            const queryBlog = []
            querySnapshot.forEach(doc => {
                // console.log(doc.id);
                const mydata = doc.data()
                mydata.id = doc.id
                // console.log(mydata);
                queryBlog.push(mydata)
                this.blog = queryBlog
                console.log(this.blog);
            });
        })
    }
}
</script>

<style scoped>
.content-warp{
  width: 580px;
  margin-top: 100px;
  margin-left: 30%;
}
.title{
 font-size: 26px;
 font-weight: 400;
 line-height: 50px;
 font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
 margin-bottom: 20px;
}
a{
  border-bottom-color: #ccc;
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  cursor: pointer;
  line-height:2;
  background-color: transparent;
  margin: 10px 0;
}
a:hover{
  border-bottom-color: black;
}
</style>