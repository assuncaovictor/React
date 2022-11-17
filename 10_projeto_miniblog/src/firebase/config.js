import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAuRMwewNzdRSCZ3FEhqVcNsGc-1Wnuk-k",
    authDomain: "miniblog-b0f8b.firebaseapp.com",
    projectId: "miniblog-b0f8b",
    storageBucket: "miniblog-b0f8b.appspot.com",
    messagingSenderId: "1045735471321",
    appId: "1:1045735471321:web:83dbfedb43ed684b1f26c8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
