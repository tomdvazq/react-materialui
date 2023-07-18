import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRhoiQ5IIVvJhpFDQ1BU70LXmO5J-02vs",
  authDomain: "react-materialui-ecommerce.firebaseapp.com",
  projectId: "react-materialui-ecommerce",
  storageBucket: "react-materialui-ecommerce.appspot.com",
  messagingSenderId: "9583276652",
  appId: "1:9583276652:web:b7e815c841d1dcfff41e49"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Conectar a la DB
export const db = getFirestore(app);