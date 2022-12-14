<script setup>
import { computed } from 'vue';
const propiedades = defineProps(['limite','inicio','final'])
const limiteSuperior = computed(() => {
  return propiedades.limite <= propiedades.final 
})
const limiteInferior = computed(() => {
  return propiedades.inicio === 0 
})

</script>

<template>
    <div>
        <button @click="$emit('anterior')" class="btn btn-outline-primary" :disabled="limiteInferior">Anterior</button>
        <button @click="$emit('siguiente')" class="btn btn-outline-primary mx-2" :disabled="limiteSuperior">Siguiente</button>
    </div>
</template> 