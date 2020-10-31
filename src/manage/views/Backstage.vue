<template>
 <div>
     <tabbar>
         <tabbar-item title = '写博客'><router-link to='/addblog'>写博客</router-link></tabbar-item>
         <tabbar-item title = '编辑博客'>编辑博客</tabbar-item>
         <div>{{userProfile.name}}</div>
         <!-- <tabbar-item>写博客</tabbar-item> -->
     </tabbar>
</div> 
</template>

<script>

import {mapState} from 'vuex'

import tabbar from './Tabbar'
import tabbarItem from './Tabbaritem'

export default {
    name:'Backstage',
    components:{
        tabbar,
        tabbarItem
    },
    computed:{
        ...mapState(['userProfile'])
    }
}
</script>

<style>

</style>