<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/user'

const router = useRouter()
const userStore = useUserStore()
const email = ref('')
const password = ref('')

const enviar = async() => { 
    if (!email.value || !password.value) {
        return alert('Llena los campos')
    }
    await userStore.loginUser(email.value,password.value)
    router.push({name:'home'})
 }
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="enviar">
            <input type="email" placeholder="Escribir email" v-model="email">
            <input type="password" placeholder="Escribir contraseña" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>