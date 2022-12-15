import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'ZamRom@test.com'
    }),
    getters: {
         //
    }
})