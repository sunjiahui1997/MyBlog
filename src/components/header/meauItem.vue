<template>
  <div class="meau-item" @click="meauitem">
      <slot name="item-ico"></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
    name:'meauItem',
    props:{
        title:String,
        path:String
    },
    data(){
      return{
        //  path:''
    }
 },
    methods:{
        meauitem(){
            // console.log(item);
            console.log(this.path);
            this.$router.push(this.path)
            // return router.push(this.path)
        }
    },
}
</script>

<style scoped>
    .meau-item{
        font-size: 14px;
        display: inline-block;
        color:black;
        padding: 0 10px;
        cursor: pointer;
        transition: all 0.2s linear;
    }
    .meau-item:hover{
        background-color: #ccc;
    }
</style>