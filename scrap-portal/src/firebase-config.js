// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHigpvBCed_HzTjcU0ExPFlvslDUfmvm4",
  authDomain: "scrap-management-portal.firebaseapp.com",
  projectId: "scrap-management-portal",
  storageBucket: "scrap-management-portal.appspot.com",
  messagingSenderId: "612054574674",
  appId: "1:612054574674:web:6692a3e51deee8fc95618b",
  measurementId: "G-7RVR0KGFM1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




// export default app;