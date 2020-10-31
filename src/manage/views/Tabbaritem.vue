<template>
    <div @click="tabbarItem">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"tabbaritem",
    data(){
        return{
            prop:{
                title:String
            }
        }
    },
    methods:{
    tabbarItem(){
        // this.$route.push(this.title)
    }
},
}
</script>

<style>

</style>