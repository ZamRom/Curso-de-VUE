<script setup>
import { ref } from 'vue';
import {useUserStore} from '../store/user'

const userStore = useUserStore()
const nombre = ref('')
</script>

<template>
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="nombre">
            <button 
            class="btn btn-secondary mt-2"
            @click="userStore.actualizar(nombre)">
                Login
            </button>
        </div>
    </div>
</template>