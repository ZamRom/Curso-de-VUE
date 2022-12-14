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
  let indice = favorites.value.indexOf(name)
  favorites.value.splice(indice, 1)
}
</script>

<template>
  <div class="container">
    <h1>Componentes:</h1>
    <button @click="obtenerP">obtener Pokemones</button>  
    <div class="container">
      <div class="row aling-items-start">
        <div class="col col-md-4 " v-for="imagen in favorites">
          <div class="card" >
            <div class="card-body">
              <img :src="imagen" alt="sprite">
            </div>
          </div>
        </div>
      </div>
    </div>
    <BlogPostVue v-for="poke in pokemones" :key="poke.name" :name="poke.name" :url="poke.url" :favorites="favorites"
      @addFavorite="Add" @quitar="quitar">
    </BlogPostVue>
  </div>
</template>