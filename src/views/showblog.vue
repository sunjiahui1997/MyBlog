<template>
    <div>
        <div>show blogs</div>
    </div>
</template>

<script>

import * as fb from 'network/firebase'

export default {
    name:'profile',
    data(){
        return{
            id:this.$route.params.id
        }
    },
    created(){
        fb.blogsCollection.doc('id').get().then(doc =>{
            console.log(doc);
        })
    }
}
</script>

<style>

</style>