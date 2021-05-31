import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQFdl3TEe6RYyRJRoJQqOh-IznA5sB1hg",
    authDomain: "signal-clone-c25df.firebaseapp.com",
    projectId: "signal-clone-c25df",
    storageBucket: "signal-clone-c25df.appspot.com",
    messagingSenderId: "802815393851",
    appId: "1:802815393851:web:50c40d2a17aba296f41c1e"
};

let app;

if(firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
