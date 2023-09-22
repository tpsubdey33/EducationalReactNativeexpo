import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';





const firebaseConfig = {
  apiKey: "AIzaSyALqouZC3_49ftsG_gW9yrSWRllUdrQ4jA",
  authDomain: "testrnp-7b99f.firebaseapp.com",
  projectId: "testrnp-7b99f",
  storageBucket: "testrnp-7b99f.appspot.com",
  messagingSenderId: "815939597129",
  appId: "1:815939597129:web:4a9728caeaedb514276098"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);