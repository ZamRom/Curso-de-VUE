import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfDGd7kXe5xZ9OSW85JaycANWfll2l2A0",
    authDomain: "pinia-eaada.firebaseapp.com",
    projectId: "pinia-eaada",
    storageBucket: "pinia-eaada.appspot.com",
    messagingSenderId: "373975890168",
    appId: "1:373975890168:web:49d965c783697de654230d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth
}
