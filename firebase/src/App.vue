<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '../src/store/user'
const userStore = useUserStore()

</script>

<template>
  <div>
    <h1>Welcome {{userStore.userData}}</h1>
  </div>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
