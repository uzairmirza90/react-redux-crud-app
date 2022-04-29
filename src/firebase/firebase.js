import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJ8jHISNq3bAPObGfrWawR9Tp544RPBJ0",
    authDomain: "event-organizer-524ad.firebaseapp.com",
    projectId: "event-organizer-524ad",
    storageBucket: "event-organizer-524ad.appspot.com",
    messagingSenderId: "172541926670",
    appId: "1:172541926670:web:cda55650664a5e87facb5f"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}