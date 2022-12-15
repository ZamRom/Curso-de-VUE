<template>
    <v-list density="compact" nav>
        <v-list-item v-for="item in items" :prepend-icon="item.icon" :title="item.title" :to="{ name: item.to }"
            :key="item.to" />
    </v-list>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    {
        title: 'Home',
        to: 'home',
        icon: 'mdi-home-city'
    },
    {
        title: 'Login',
        to: 'login',
        icon: 'mdi-account' 
    },
    {
        title: 'Store',
        to: 'store',
        icon: 'mdi-office-building'
    }
])
</script>