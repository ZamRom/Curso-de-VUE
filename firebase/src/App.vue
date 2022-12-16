<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from '../src/store/user'
const userStore = useUserStore()

const router = useRouter()
const salir = async () => {
  try {
    await userStore.logoutUser()
    router.push({ name: 'login' })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>

  <div>
    <template v-if="userStore.userData.email">
      <h1>Welcome {{ userStore.userData.email }}</h1>
      <RouterLink :to="{ name: 'home' }">home</RouterLink>
      <button @click="salir">Cerrar sesion</button>
    </template>
    <template v-else>
      <RouterLink :to="{ name: 'login' }"> Login</RouterLink>
      <RouterLink :to="{ name: 'register' }">Register</RouterLink>
    </template>

  </div>
  <RouterView />
</template>
