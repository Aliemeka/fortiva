<script setup lang="ts">
</script>

<template>
  <h1 class="title">Fortiva</h1>
  
  <RouterView />
</template>

<style scoped>
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #045128;
}

[data-theme="dark"] .title {
  color: #00ff00;
}
</style>
