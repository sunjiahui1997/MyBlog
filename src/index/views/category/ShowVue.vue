<template>
    <div>
        <div>{{blog.title}}</div>
        <div v-html="blog.contextvalue"></div>
    </div>
</template>

<script>

import * as fb from 'index/network/firebase'

export default {
    name:'ShowVue',
    data(){
        return{
            id:this.$route.params.id,
            blog:''
        }
    },
    created(){
        fb.blogsCollection.doc(this.id).get().then(doc =>{
            if(doc.exists){
                console.log(doc.data());
                this.blog = doc.data()
            }
        })
    }
}
</script>

<style>

</style>