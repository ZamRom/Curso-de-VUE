<script setup>
import { ref } from 'vue';
const name = 'crud';
const azul = "color:aqua";
const arrayColores = ['blue', 'red', 'aqua'];
const activo = ref(false);
const pokemones = [];
const click1 = () => {
  activo.value = !activo.value
  alert(`El estado actual es ${activo.value}`)
};
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data => {
    data.results.forEach((element) => {
      pokemones.push(element);
    });
  })
  .catch(error => console.log(error))

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1> <br>
  <h2 :style="`color: ${arrayColores[0]}`">soy azul</h2> <br>
  <h2>{{ arrayColores }}</h2> <br>
  <h2>{{ activo ? 'estoy activo' : 'Estoy inactivo' }}</h2> <br>
  <h2 v-if="activo === true">estoy activo</h2>
  <h2 v-else-if="activo === false">estoy inactivo</h2>
  <h2 v-else>estoy indeterminado</h2>
  <br>
  <h2 v-show="activo">estoy activo</h2>
  <br>
  <ul>
    <li v-for="(color, index) in arrayColores" :key="index">{{ index }} - {{ color }}</li>
  </ul>
  <br>
  <button @click="click1">activame</button>
  <br>
  <div v-if="pokemones.length">
    <h1>Pokemones list</h1>
    <ul>
      <li v-for="poke in pokemones" :key="name">{{ poke }}
        <ul v-for="prop in poke">{{ prop }}</ul>
      </li>

    </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>