<script setup>
import { computed } from 'vue';
import { useObtenerPokemones } from '@/composables/obtenerPokemones'

const { apiData, loading, obtenerPokemones } = useObtenerPokemones()
const pokemones = computed(() => {
    return apiData.value.results
})
const next = computed(() => {
    return apiData.value.next
})
const previous = computed(() => {
    return apiData.value.previous
})
const previousPage = obtenerPokemones(previous.value)
const nextPage = obtenerPokemones(next.value)
obtenerPokemones('https://pokeapi.co/api/v2/pokemon')
const headers = [
    {
        text: 'Pokemon',
        value: 'name',
    },
    {
        text: 'Acciones',
        value: 'actions',
        align: 'end'
    }
]
const cargar = (item) => {
    loading.value = true
}
</script>

<template>
    <v-card height="100%">
        <v-card-text>
            <h1 class="mb-2">Store</h1>
            <v-table fixed-header="" height="490px" density="compact">
                <thead>
                    <tr>
                        <th class="text-left">
                            Nombre del pokemon
                        </th>
                        <th class="text-left">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in pokemones" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>
                            <v-icon :loading="loading" :disabled="loading" color="primary"
                                variant="flat" @click="cargar(item)">
                                mdi-arrow-right-bold
                            </v-icon>
                            <v-icon color="secondary">
                                mdi-star
                            </v-icon>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>

</template>