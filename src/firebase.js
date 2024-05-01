

import { initializeApp } from "firebase/app"; // Import only the initializeApp function
import { getDatabase, ref } from "firebase/database"; // Import getDatabase function

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYnXp1PcMrayTCWX9-D3KleFNRpCbKjig",
    authDomain: "sipoonwolf-u8-kevatturnaus.firebaseapp.com",
    projectId: "sipoonwolf-u8-kevatturnaus",
    storageBucket: "sipoonwolf-u8-kevatturnaus.appspot.com",
    messagingSenderId: "33000144522",
    appId: "1:33000144522:web:f06071ce96a4e1887ff773",
    measurementId: "G-MYC78848CJ"
  };
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Access Firebase Realtime Database
export const database = getDatabase(firebaseApp); // Use getDatabase function to initialize the database

export const gamesRef = ref(database, 'games');

