import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA_5rwN6pdpayY_56FWue8iUxNXpmmum2c",
    authDomain: "projetominiblogerickrumpel.firebaseapp.com",
    projectId: "projetominiblogerickrumpel",
    storageBucket: "projetominiblogerickrumpel.appspot.com",
    messagingSenderId: "497758486073",
    appId: "1:497758486073:web:908cbd3e66591ba81797e8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db, app }