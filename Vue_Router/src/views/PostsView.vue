<script setup>
import { ref, computed } from 'vue';
import { useGetData } from '@/composables/getData'

const { apiData, getData, loading } = useGetData()
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
                <div class="mb-2">
                    <button class="btn btn-outline-success" @click="getData(apiData.previous)" :disabled="disablePrev">
                        Previo
                    </button>
                    <button class="btn btn-outline-primary mx-2" @click="getData(apiData.next)" :disabled="disableNext">
                        Siguiente
                    </button>
                </div>
                <ul class="list-group">
                    <li class="capital list-group-item" v-for="poke in pokemones" :key="poke.name">
                        {{ poke.name }}
                        <button class="btn btn-outline-primary">
                            <RouterLink :to="{ name: 'pokemon', params: { poke: poke.name } }">
                                Mas informacion
                            </RouterLink>
                        </button>
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