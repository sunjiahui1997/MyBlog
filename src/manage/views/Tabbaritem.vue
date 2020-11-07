<template>
  <div @click="tabbarItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  data() {
    return {
      props: {
        title: String,
        path: String
      }
    };
  },
  methods: {
    tabbarItem() {
      // this.$router.push(this.path)
    }
  }
};
</script>

<style>
</style>