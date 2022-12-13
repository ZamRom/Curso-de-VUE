<script setup>
import { ref } from 'vue';
const contador = ref(0)
const aumentar = () => {
  contador.value++
  switch (true) {
    case contador.value < 0:
      aplicarClase.value = 'rojo'
      break;
    case contador.value > 0:
      aplicarClase.value = 'verde'
      break;
    default:
      aplicarClase.value = ''
      break;
  }
}
const disminuir = () => {
  contador.value -= 1
  switch (true) {
    case contador.value < 0:
      aplicarClase.value = 'rojo'
      break;
    case contador.value > 0:
      aplicarClase.value = 'verde'
      break;
    default:
      aplicarClase.value = ''
      break;
  }
}

const aplicarClase = ref('')
</script>

<template>
  <h1>contador <strong :class="aplicarClase">{{ contador }}</strong></h1><br>
  <button @click="aumentar">aumentar</button>
  <button @click="disminuir">disminuir</button>
</template>

<style>
.verde {
  color: aqua;
}

.rojo {
  color: red;
}
</style>