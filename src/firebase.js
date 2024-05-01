
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import getDatabase function
import 'firebase/database'; // Import database module separately

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Access Firebase Realtime Database
export const database = getDatabase(); // Use getDatabase function to initialize the database

// Now you can use the 'database' object to interact with your Firebase Realtime Database
