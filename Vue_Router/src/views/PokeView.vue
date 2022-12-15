<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData'


const route = useRoute()
const router = useRouter()

const { loading, apiData, getData } = useGetData()
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.poke}`)
</script>
<template>
    <div v-if="loading">
        Cargando...
    </div>
    <div v-else>
        <h1>el nombre del pokemon es: {{ apiData.name }} </h1><br>
        <img :src="apiData.sprites.front_default" alt="">
        <img :src="apiData.sprites.front_shiny" alt=""><br>
        <h2>Es de tipo:</h2>
        <ul>
            <li v-for="(type, index) in apiData.types" :key="index">
                {{ type.type.name }}
            </li>
        </ul>
        <hr>
        Sus stats son:
        <ul>
            <li v-for="(stat, index) in apiData.stats" :key="index">
                {{ stat.stat.name }} : {{ stat.base_stat }}
            </li>
        </ul>
        <button class="btn btn-outline-primary">
            <RouterLink :to="{ name: 'posts' }">
                Regresar a Posts
            </RouterLink>
        </button>

    </div>
</template>