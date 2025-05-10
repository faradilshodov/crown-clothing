import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3X_G9oSpyoyy0lWBBBASdXyd6V44aZ6s",
    authDomain: "crown-clothing-db-e6922.firebaseapp.com",
    projectId: "crown-clothing-db-e6922",
    storageBucket: "crown-clothing-db-e6922.firebasestorage.app",
    messagingSenderId: "184264612555",
    appId: "1:184264612555:web:106f1d9f0cfeb4270ad94e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);