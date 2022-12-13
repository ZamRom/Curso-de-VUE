<script setup>
import { ref } from 'vue';
import  ButtonContador from './components/ButtonContador.vue'
import BlogPostVue from './components/BlogPost.vue';
const pokemones = ref([])
const obtenerP = () => { 
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then(resp => resp.json())
  .then(data =>{
    pokemones.value = data.results
  })
 }
</script>

<template>
  <div>
    <h1>Componentes:</h1>
    <button @click="obtenerP">obtener Pokemones</button>
    <BlogPostVue v-for="poke in pokemones" :key="poke.name" :name="poke.name" :url="poke.url"></BlogPostVue>
  </div>
</template>