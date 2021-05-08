import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "automated-portfolio-generator.firebaseapp.com",
  projectId: "automated-portfolio-generator",
  storageBucket: "automated-portfolio-generator.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = app.firestore();
const projectStorage = firebase.storage();

const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, database, providerGitHub, providerGoogle, providerFacebook, projectStorage }