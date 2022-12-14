<script setup>
import axios from 'axios'
import { ref, computed } from 'vue';
const pokemones = ref([])
const totalPokemones = ref(undefined)
const previous = ref(false)
const next = ref(undefined)
const limite = ref(20)
const urlTest = computed(() => { return 'https://pokeapi.co/api/v2/pekemon?limit=' + limite.value })

 const obtenerPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {
        const dataG = await axios.get(url)
        totalPokemones.value = dataG.data.count
        pokemones.value = dataG.data.results
        previous.value = dataG.data.previous
        next.value = dataG.data.next
    } catch (e) {
        console.log(e)
    }
} 
const anterior = () => obtenerPokemons(previous.value)
const siguiente = () => obtenerPokemons(next.value)
const disablePrev = computed(() => {
    return previous.value ? false : true
})
const disableNext = computed(() => {
    return next.value ? false : true
})
const nueva = () => {
    let url=`https://pokeapi.co/api/v2/pokemon?limit=${limite.value}`
    axios.get(url)
    .then(dataG=>{
        totalPokemones.value = dataG.data.count
        pokemones.value = dataG.data.results
        previous.value = dataG.data.previous
        next.value = dataG.data.next
    }).catch(e=>console.log(e))

}
obtenerPokemons();
</script>

<template>
    <div>
        <div class="card">
            <template v-if="pokemones.length">
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
                    <li class="capital" v-for="poke in pokemones" :key="poke.name">{{ poke.name }}</li>
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