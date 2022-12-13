<script setup>
import { ref, computed } from 'vue';
const contador = ref(0)
const aumentar = () => {
  contador.value++
}
const disminuir = () => {
  contador.value -= 1
}
const color = computed( ()=> {
  switch (true) {
    case contador.value === 0:
      return ''
      break;
    case contador.value < 0:
      return 'rojo'
      break
    case contador.value > 0:
      return 'verde'
      break;
  }
})
const reseteo = () => {
  contador.value = 0
}
const aplicarClase = ref('')
</script>

<template>
  <h1>contador <strong :class="color">{{ contador }}</strong></h1><br>
  <button @click="aumentar">aumentar</button>
  <button @click="disminuir">disminuir</button>
  <button @click="reseteo">resetear</button>
</template>

<style>
.verde {
  color: aqua;
}

.rojo {
  color: red;
}
</style>