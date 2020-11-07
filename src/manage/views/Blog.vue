<template>
  <div>
    {{ userProfile }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      userProfile
    })
  }
};
</script>

<style>
</style>