<script setup>
import { ref } from 'vue';
defineProps(['name','url','favorites'])
const pokemon = ref({})
const visitar = (url) => { 
    fetch(url)
    .then(resp => resp.json())
  .then(data =>{
    pokemon.value = data
    imagen.value = data.sprites.front_default
  })
 }
const imagen = ref(undefined)
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1>{{name.toUpperCase() ??"Nombre del pokemon"}}</h1>
                <p>Url: {{url}}</p>
                <img :src="imagen" alt="sprite" v-if="imagen">
                <button @click="visitar(url)" v-if="!imagen">mostrar sprite</button>
                <button v-if="!favorites.includes(imagen) && imagen" 
                @click="$emit('addFavorite',imagen)" 
                class="btn btn-outline-primary">
                    Marcar favorito
                </button>
                <button v-if="favorites.includes(imagen) && imagen"
                @click="$emit('quitar',name)" 
                class="btn btn-outline-danger">
                    Quitar de favorito
                </button>
            </div>
        </div>
    </div>
</template>

<style>
img {
    height: 150px;
}
</style>