<template>
  <div id="app">
    <!-- <sign-up v-if='logIn' @login='login()' ></sign-up> -->
    <router-view ></router-view>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "App",
  data() {
    return {
      logIn: true,
      time: new Date(),
      time1: ""
    };
  },
  created() {
    const now = moment().format("YYYY-M-D");
    this.time1 = now;
  },
  components: {},
  methods: {
    login() {
      console.log("登录成功");
      // this.logIn = false
      // this.$route
    }
  },
  computed: {
    count() {
      return this.$store.state.userProfile;
    }
  },
  filters: {
    day(val) {
      if (!val) {
        return "-";
      }
      let data = moment(val);
      return data.format("YYYY-M-D");
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  opacity: 1;
  margin: 0;
  padding: 0;
}
::selection {
  background: #262a30;
  color: #fff;
}
</style>
