import { ref } from "vue"
import axios from 'axios'
import { useRouter } from "vue-router"

export const useGetData = () => {
    const error = ref(undefined)
    const router = useRouter()
    const loading = ref(false)
    const apiData = ref({})
    const getData = async (url) => {
        loading.value = true
        try {
            const dataG = await axios.get(url)
            apiData.value = dataG.data
        } catch (e) {
            setTimeout(() => {
                router.push({ name: '404' })
            }, 1000)
            error.value = e.message
        } finally {
            loading.value = false
        }
    }

    return {
        apiData,
        getData,
        loading,
        error
    }
}

