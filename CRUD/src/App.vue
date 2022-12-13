<script setup>
import { ref, computed } from 'vue';
const contador = ref(0)
const fav = ref([])
const aumentar = () => {
  contador.value++
}
const disminuir = () => {
  contador.value -= 1
}
const add = () => {
  fav.value.push(contador.value)
  fav.value = fav.value.sort()
  contador.value = 0
}
const borrar = () => {
  fav.value = []
}
const deshabilitar = computed(() => {
  return fav.value.includes(contador.value)
})
const classDeshabilitar = computed(() => { 
  return !fav.value.includes(contador.value) ? 'btn btn-primary' : 'btn btn-secondary'
 })
const color = computed(() => {
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
  <div>
    <h1>contador <strong :class="color">{{ contador }}</strong></h1>
    <button class="btn btn-primary" @click="aumentar">aumentar</button>
    <button class="btn btn-primary" @click="disminuir">disminuir</button>
    <button class="btn btn-primary" @click="reseteo">resetear</button>
    <button :class="classDeshabilitar" @click="add" :disabled="deshabilitar">añadir a lista</button>
    <div v-if="fav.length">
      <ul>
        <li v-for="item in fav">{{ item }}</li>
      </ul>
      <button class="btn btn-danger" @click="borrar">borrar lista</button>
    </div>
  </div>
</template>

<style>
.verde {
  color: aqua;
}

.rojo {
  color: red;
}
.btn {
  margin-left: 5px;
}
</style>