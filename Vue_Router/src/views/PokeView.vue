<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const apiData = ref(undefined)
const route = useRoute()
const router = useRouter()
const getData = async () => {
    try {
        const dataG = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.poke}`)
        apiData.value = dataG.data

    } catch (e) {
        console.log(e)
        router.push({ name: '404' }).catch(() => { })
    }
}
getData()
</script>
<template v-if="apiData">
    <div>
        <h1>el nombre del pokemon es: {{ apiData.name }} </h1><br>
        <img :src="apiData.sprites.front_default" alt=""><br>
        <h2>Es de tipo:</h2>
        <ul>
            <li v-for="(type, index) in apiData.types" :key="index">
                {{ type.type.name }}
            </li>
        </ul>
        <hr>
        Sus stats son:
        <ul>
            <li v-for="(stat, index) in apiData.stats" :key="index">
                {{ stat.stat.name }} : {{ stat.base_stat }}
            </li>
        </ul>
        <RouterLink :to="{ name: 'posts' }">
            Regresar a Posts
        </RouterLink>
    </div>
</template>