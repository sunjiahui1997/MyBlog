<template>
    <div>
        <div class="backtop"><img v-if="btnFlag" src="~index/assets/箭头.svg" alt="" @click="backtop"></div>
    </div>
</template>

<script>
export default {
    name:"backtop",
    data(){
        return{
            btnFlag:false,
            scrollTop:0
        }
    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop)
    },
    destroyed(){
        window.addEventListener('scroll', this.scrollToTop)
    },
    methods:{
        backtop(){
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop/5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if(that.scrollTop === 0){
                    clearInterval(timer)
                }
            }, 16);
        },
        scrollToTop(){
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if(this.scrollTop > 60 ){
                that.btnFlag =true
            }else{
                that.btnFlag = false
            }
        }
    }
}
</script>

<style scoped>
.backtop{
    position: fixed;
    right: 30px;
    top: 85%;
    z-index: 10;
}
img{
    width: 30px;
    height: 30px;
}
</style>