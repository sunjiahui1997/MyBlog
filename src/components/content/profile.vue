<template>
    <div><div>{{blog}}</div></div>
</template>

<script>

import * as fb from 'network/firebase'

export default {
    name:'profile',
    data(){
        return{
            id:this.$route.params.id,
            blog:null
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