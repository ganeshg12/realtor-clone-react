// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUHp38ahilj8p-DGjrbrgTRKq1VnmXgw",
  authDomain: "realtor-clone-react-fbc1b.firebaseapp.com",
  projectId: "realtor-clone-react-fbc1b",
  storageBucket: "realtor-clone-react-fbc1b.appspot.com",
  messagingSenderId: "487744685675",
  appId: "1:487744685675:web:d7cfce19cb356d5871932e"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
