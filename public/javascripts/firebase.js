import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVKQMi2u8bd7R3kVeIRuCoiY_-nHiXrAI",
  authDomain: "login-5fed0.firebaseapp.com",
  databaseURL: "https://login-5fed0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-5fed0",
  storageBucket: "login-5fed0.firebasestorage.app",
  messagingSenderId: "582480378711",
  appId: "1:582480378711:web:85f145e79ff18fc6965c12",
  measurementId: "G-V7K65JV1Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };