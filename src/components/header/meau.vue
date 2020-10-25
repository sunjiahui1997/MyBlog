<template>
  <div class="meau">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'meau'
}
</script>

<style scoped>
    .meau{
        display: flex;
        justify-content: space-between;
    }
</style>