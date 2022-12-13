<script setup>
import { ref } from 'vue';
const contador = ref(0)
const aumentar =() => { 
    contador.value++
 }
</script>
<template>
    <div>
        <button class="btn btn-primary" @click="aumentar">Incrementar {{contador}}</button>
    </div>
</template>