// import * as firebase from "firebase/app"
// import "firebase/auth"

// const app= firebase.initializeApp({
//        apiKey: process.env.REACT_APP_FIREBASE_KEY,
//        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//        appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

//      export default app

 import { initializeApp } from "firebase/app";
//  import {getAuth} from "firebase/auth"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyAvvHOF-M9vnaflicg2vmaC6JpBIbyui7Q",
   authDomain: "ecomm-d99b4.firebaseapp.com",
  projectId: "ecomm-d99b4",
   storageBucket: "ecomm-d99b4.appspot.com",
   messagingSenderId: "285348962696",
   appId: "1:285348962696:web:95b4ba989704530f391a3d"
 };

 const app = initializeApp(firebaseConfig);
const auth=getAuth()

// export default firebase
export {app,auth}
export default app;
// export const googleAuthProvider = new GoogleAuthProvider();