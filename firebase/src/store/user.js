import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: {}
    }),
    actions: {
        async registerUser(email, password) {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = user
            } catch (error) {
                alert('existe un error' + error.message)
            }
        },
        async loginUser(email, password) {
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = user
            } catch (error) {
                alert('existe un error' + error.message)
            }
        },
        async logoutUser() {
            try {
                await signOut(auth)
                this.userData = {}
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        //
    }
})