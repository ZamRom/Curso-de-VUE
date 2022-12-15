<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData'
import { computed } from 'vue';
import {useFavoriteStore} from '@/store/favoritos.js'
import { storeToRefs } from 'pinia';

const useFavorite = useFavoriteStore()
const route = useRoute()
const router = useRouter()

const existe = computed (() => { 
    return favorites.value.find(x => x.id === apiData.value.id) ? true : false
 })
const {addFavorite, rmvFavorite} = useFavorite
const {favorites} = storeToRefs(useFavorite)
const { loading, apiData, getData, error } = useGetData()
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.poke}`)
</script>
<template>
    <p v-if="loading">
        Cargando...
    </p>
    <div class="alert alert-danger" v-if="error">
        {{ error }}
    </div>
    <div v-if="apiData.name">
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
        <button class="btn btn-outline-success ms-2" @click="addFavorite(apiData)" v-if="!existe">
            Añadir a Favoritos
        </button>
        <button class="btn btn-outline-danger ms-2" @click="rmvFavorite(apiData.id)" v-else>
            Eliminar de Favoritos
        </button>
        <hr>
        <button class="btn btn-outline-primary">
            <RouterLink :to="{ name: 'posts' }">
                Regresar a Pokemones
            </RouterLink>
        </button>
        <button class="btn btn-outline-primary ms-2" v-if="favorites.length">
            <RouterLink :to="{ name: 'favorites' }">
                Visitar favoritos
            </RouterLink>
        </button>

    </div>
</template>