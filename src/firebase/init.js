import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzuxKjNjGXwWlRqNIlaDt5S_g3pb-KeJk",
  authDomain: "shinobi-chat.firebaseapp.com",
  databaseURL: "https://shinobi-chat.firebaseio.com",
  projectId: "shinobi-chat",
  storageBucket: "shinobi-chat.appspot.com",
  messagingSenderId: "682305316077"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();