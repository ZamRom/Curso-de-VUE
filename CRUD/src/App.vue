<script setup>
import { ref } from 'vue';
import ButtonContador from './components/ButtonContador.vue'
import BlogPostVue from './components/BlogPost.vue';
const pokemones = ref([])
const obtenerP = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {
      pokemones.value = data.results
    })
}
const favorites = ref([])
const Add = (name) => {
  if (!favorites.value.includes(name)) favorites.value.push(name)
}
const quitar = (name) => {
  let indice = favorites.value.findIndex(name)
  console.log(indice)
}
</script>

<template>
  <div>
    <h1>Componentes:</h1>
    <button @click="obtenerP">obtener Pokemones</button>
    <p>{{ favorites }}</p>
    <BlogPostVue v-for="poke in pokemones" :key="poke.name" :name="poke.name" :url="poke.url" :favorites="favorites"
      @addFavorite="Add" @quitar="quitar">
    </BlogPostVue>
  </div>
</template>