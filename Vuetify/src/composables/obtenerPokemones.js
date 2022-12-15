import axios from 'axios'
import { ref } from 'vue'

export const useObtenerPokemones = () => {
    const loading = ref(false)
    const apiData = ref([])
    const obtenerPokemones = async (url) => {
        loading.value = true
        try {
            const dataGet = await axios.get(url)
            apiData.value = dataGet.data
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }
    }
    return {
        apiData,
        loading,
        obtenerPokemones
    }
}