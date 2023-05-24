// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfT7Ry3n_261DZxRvWkuKLyuPqjIGmAHI",
    authDomain: "fir-a4275.firebaseapp.com",
    projectId: "fir-a4275",
    storageBucket: "fir-a4275.appspot.com",
    messagingSenderId: "986726229774",
    appId: "1:986726229774:web:01ce6990ae2edeb37d595f"
};

if (firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}
export default firebase;