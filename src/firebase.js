

import { initializeApp } from "firebase/app"; // Import only the initializeApp function
import { getDatabase } from "firebase/database"; // Import getDatabase function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Access Firebase Realtime Database
export const database = getDatabase(firebaseApp); // Use getDatabase function to initialize the database

