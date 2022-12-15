import { ref } from "vue"
import axios from 'axios'

export const useGetData = () => { 
    const loading = ref(false)
    const apiData = ref({})
    const getData = async (url) => { 
        loading.value = true
        try {
            const dataG = await axios.get(url)
            apiData.value = dataG.data
    
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
     }
     
     return {
        apiData,
        getData,
        loading
     }
 }

 