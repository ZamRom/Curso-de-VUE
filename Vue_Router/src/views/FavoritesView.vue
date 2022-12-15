<script setup>
import { useFavoriteStore } from '@/store/favoritos.js'
import { storeToRefs } from 'pinia'

const useFavorite = useFavoriteStore()
const { rmvFavorite } = useFavorite
const { favorites } = storeToRefs(useFavorite)

</script>

<template>
    <div>
        <h1>Mis favoritos</h1>
        <ul v-if="favorites.length" class="list-group">
            <li v-for="poke in favorites" :key="poke.id" class="list-group-item">
                {{ poke.name }}
                <button class="btn btn-outline-primary">
                    <RouterLink :to="{ name: 'pokemon', params: { poke: poke.name } }">
                        Mas informacion
                    </RouterLink>
                </button>
                <button class="btn btn-outline-danger ms-2" @click="rmvFavorite(poke.id)">
                    Eliminar de Favoritos
                </button>
            </li>
        </ul>
        <p v-else>
            No tienes favoritos
        </p>
        <hr>
        <div class="text-center">
            <button class="btn btn-outline-primary text-center">
                <RouterLink :to="{ name: 'posts' }">
                    Ir a Pokemones
                </RouterLink>
            </button>
        </div>

    </div>
</template>