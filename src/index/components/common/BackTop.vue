<template>
  <div>
    <div class="backtop">
      <img
        v-if="btnFlag"
        src="~index/assets/箭头.svg"
        alt=""
        @click="backtop"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "backtop",
  data() {
    return {
      btnFlag: false,
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backtop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 60) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    }
  }
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 30px;
  top: 85%;
  z-index: 10;
  cursor: pointer;
}

img {
  width: 30px;
  height: 30px;
}
img:hover {
  background-color: black;
  color: white;
}
</style>