import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore('favorites', () => {

    const favorites = ref((localStorage.favorites) ? JSON.parse(localStorage.favorites) : [])
    const addFavorite = (poke) => {
        let exist = favorites.value.find(x => x.id === poke.id)
        if (!exist) favorites.value.push(poke)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
    const rmvFavorite = (id) => {
        let index = favorites.value.findIndex(x => x.id === id)
        favorites.value.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    return {
        addFavorite,
        favorites,
        rmvFavorite
    }
}
) 