<script setup>
defineProps(['limiteSuperior','limiteInferior'])

</script>

<template>
    <div>
        <button @click="$emit('anterior')" class="btn btn-outline-primary" :disabled="limiteInferior">Anterior</button>
        <button @click="$emit('siguiente')" class="btn btn-outline-primary mx-2" :disabled="limiteSuperior">Siguiente</button>
    </div>
</template> 