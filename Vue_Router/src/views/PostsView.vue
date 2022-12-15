<script setup>
import { ref, computed } from 'vue';
import {useGetData} from '@/composables/getData'

const {apiData,getData, loading} = useGetData()
const pokemones = computed(() => {
    return apiData.value.results
})
const totalPokemones = computed(() => {
    return apiData.value.count
})
const previous = computed(() => {
    return apiData.value.previous
})
const next = computed(() => {
    return apiData.value.next
})
const limite = ref(20)
const urlTest = computed(() => { return 'https://pokeapi.co/api/v2/pekemon?limit=' + limite.value })
const anterior = () => getData(previous.value)
const siguiente = () => getData(next.value)
const disablePrev = computed(() => {
    return previous.value ? false : true
})
const disableNext = computed(() => {
    return next.value ? false : true
})
const nueva = () => {
    apiData.value.results = []
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limite.value}`
    getData(url)

}
getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
    <div v-if="loading">
        Cargando...
    </div>
    <div v-else>
        <div class="card">
            <template v-if="pokemones">
                <input v-model="limite">
                <button class="btn btn-outline-success" @click="nueva">
                    buscar
                </button>
            </template>
            <div class="card-body">
                <h1>lista de pokemones: </h1>
                <button class="btn btn-outline-primary" @click="anterior" :disabled="disablePrev">
                    Previo
                </button>

                <button class="btn btn-outline-primary mx-2" @click="siguiente" :disabled="disableNext">
                    Siguiente
                </button>
                <ul>
                    <li class="capital" v-for="poke in pokemones" :key="poke.name">
                        <RouterLink :to="{ name: 'pokemon', params: { poke: poke.name } }">
                            {{ poke.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.capital {
    text-transform: capitalize;
}
</style>