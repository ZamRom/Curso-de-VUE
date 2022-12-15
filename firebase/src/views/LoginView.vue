<script setup>
import { ref } from 'vue';
const userName = ref('poke')
</script>

<template>
    <div>
        <h1>Login</h1><br>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="userName">
        </div>
    </div>
</template>