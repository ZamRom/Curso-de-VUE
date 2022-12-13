<script setup>
import { ref } from 'vue';
const name = 'crud';
const azul = "color:aqua";
const arrayColores = ['blue', 'red', 'aqua'];
const activo = ref(false);
const pokemones = ref(undefined);
const click1 = () => {
  activo.value = !activo.value
  alert(`El estado actual es ${activo.value}`)
};
const traePokemones = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
      let pruebas = []
      data.results.forEach((element) => {
        pruebas.push(element);
      });
      pokemones.value = pruebas
    })
    .catch(error => console.log(error))
}
const borrarPokemones = () => {
  pokemones.value = undefined
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1> <br>
  <button @click="traePokemones">Trae Pokemones</button><br>
  <button @click="borrarPokemones">Borrar Pokemones</button><br>
  <div v-if="pokemones">
    <ul>
      <li v-for="poke in pokemones">{{ poke.name }}</li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>