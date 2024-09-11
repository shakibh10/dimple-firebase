// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXtnr90E28iWNPhxc-iaW1-1OOJ1OJvR8",
  authDomain: "dimple-firebase-7b006.firebaseapp.com",
  projectId: "dimple-firebase-7b006",
  storageBucket: "dimple-firebase-7b006.appspot.com",
  messagingSenderId: "857876133194",
  appId: "1:857876133194:web:7f10d4911e5f11ec1a7db3",
  measurementId: "G-9R5NDEW3R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;