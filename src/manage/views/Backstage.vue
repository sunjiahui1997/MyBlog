<template>
  <div>
    <div class="tol-header">
      <img class="img" src="~manage/assets/2.jpg" alt="" href="/main" />
      <div class="header">
        <div class="nav-left">
          <div class="logo" @click="backstage">博客后台</div>
          <div class="nav">
            <div class="nav-item" id="nav-item1">
              <a href="/main" class="nav-item">前台</a>
            </div>
          </div>
          <div class="nav-item-right" @click="toprofile">{{ name }}</div>
          <div class="nav-item-right" @click="logout">退出登录</div>
        </div>
      </div>
    </div>
    <tabbar class="content">
      <div>
        <tabbar-item class="title" title="写博客" path="addblog"
          ><router-link to="/backstage/addblog"
            >写博客</router-link
          ></tabbar-item
        >
        <tabbar-item class="title" title="编辑博客" path="editblog"
          ><router-link to="/backstage/editblog"
            >全部博客</router-link
          ></tabbar-item
        >
        <tabbar-item class="title"
          ><a @click="showlink = !showlink">链接</a>
        </tabbar-item>
        <div class="dropdown" v-if="showlink">
          <div class="link-item">
            <router-link to="/backstage/showlink">全部链接</router-link>
          </div>
          <div class="link-item">
            <router-link to="/backstage/addlink">添加链接</router-link>
          </div>
        </div>
        <tabbar-item class="title"
          ><a @click="showcate = !showcate">分类</a>
        </tabbar-item>
        <div class="dropdown" v-if="showcate">
          <div class="link-item">
            <router-link to="/backstage/showcate">全部分类</router-link>
          </div>
          <div class="link-item">
            <router-link to="/backstage/addcate">添加分类</router-link>
          </div>
        </div>
      </div>
      <router-view id="view" v-if="isRouterAlive"></router-view>
      <!-- <tabbar-item>写博客</tabbar-item> -->
    </tabbar>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

import { mapState } from "vuex";

import tabbar from "./Tabbar";
import tabbarItem from "./Tabbaritem";

export default {
  name: "Backstage",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      name: "",
      showlink: false,
      showcate:false,
      isRouterAlive: true
    };
  },
  components: {
    tabbar,
    tabbarItem
  },
  computed: {
    ...mapState(["userProfile"])
  },
  created() {
    fb.usersCollection
      .doc(fb.auth.currentUser.uid)
      .get()
      .then(doc => {
        const x = doc.data();
        this.name = x.name;
      });
  },
  methods: {
    addblog() {
      // this.$router.push('/addblog')
    },
    logout() {
      var r = confirm("确定退出？");
      if (r == true) {
        this.$store.dispatch("logout");
      } else {
      }
    },
    backstage() {
      this.$router.push("/backstage");
    },
    toprofile() {
      this.$router.push("/backstage/userprofile");
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
}
.title {
  display: block;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}
.title:hover {
  background-color: #555;
  color: white;
}
#view {
  position: relative;
  left: 50px;
}
.img {
  width: 200px;
  height: 110px;
}
.header {
  width: 100%;
  height: 50px;
  float: right;
  background-color: #393d49;
}
.tol-header {
  display: flex;
}
.logo {
  display: inline;
  color: bisque;
  line-height: 3;
  padding-right: 30px;
  padding-left: 15px;
  cursor: pointer;
}
.nav {
  display: flex;
  flex: 1;
  line-height: 3;
}
.nav-item {
  color: #f1f1f1;
  padding-right: 20px;
}
.nav-left {
  display: flex;
}
.nav-item:hover {
  color: red;
}
.nav-item-right {
  /* color: #f1f1f1; */
  color: rgba(255, 255, 255, 0.7);
  padding-right: 20px;
  cursor: pointer;
  margin-right: 15px;
  line-height: 3;
  transition: all 0.3s;
}
.nav-item-right:hover {
  color: white;
}
#nav-item1 {
  position: relative;
  top: -8px;
}
.dropdown {
  width: 200px;
  padding: 0;
  margin: 0;
}
.link-item {
  padding: 0;
  margin: 0;
  background-color: #393d49;
  color: beige;
  cursor: pointer;
  height: 50px;
  padding-left: 20px;
  line-height: 2;
}
a:hover {
    transition: all 0.3s;
  color: aliceblue;
}
</style>