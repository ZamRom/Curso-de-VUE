<script setup>
import { ref, computed } from 'vue';
import PaginatedPost from './components/PaginatedPosts.vue'
const posts = ref([])
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(data => posts.value = data)
const perPage = 80
const inicio = ref(0)
const final = ref(perPage)
const paginaAnterior = () => {
  if (inicio.value !== 0) {
    inicio.value -= perPage
    final.value -= perPage
  }
}
const paginaSiguiente = () => {
  inicio.value += perPage
  final.value += perPage
}


</script>

<template>
  <div v-if="posts.length">
    <PaginatedPost :limite="posts.length" :final="final" :inicio="inicio" class="my-2"
      @anterior="paginaAnterior" @siguiente="paginaSiguiente" />
    <div class="card mb-2" v-for="post in posts.slice(inicio, final)" :key="post.id">
      <div class="card-title">
        Post Id : {{ post.id }} - {{ post.title }}
      </div>
      <div class="card-body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>