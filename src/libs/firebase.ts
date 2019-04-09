import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBhDxElmrKC6T17AGU3Jrdf9huh9xhG9uM",
  authDomain: "firbase-practice-efdb9.firebaseapp.com",
  databaseURL: "https://firbase-practice-efdb9.firebaseio.com",
  projectId: "firbase-practice-efdb9",
  storageBucket: "firbase-practice-efdb9.appspot.com",
  messagingSenderId: "727189310307"
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);

export default firebase

export {
  provider
}
