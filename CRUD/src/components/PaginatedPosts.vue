<script setup>
defineProps(['limite'])
</script>

<template>
    <div>
        <button @click="$emit('anterior')" class="btn btn-outline-primary">Anterior</button>
        <button @click="$emit('siguiente')" class="btn btn-outline-primary mx-2">Siguiente</button>
    </div>
</template> 