//firebase.js
import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8Rf8yvF7bxk6J0NtnD_m9Xy6dm-m-fDM",
  authDomain: "roomyz.firebaseapp.com",
  databaseURL: "https://roomyz.firebaseio.com",
  projectId: "roomyz",
  storageBucket: "roomyz.appspot.com",
  messagingSenderId: "459316952223",
  appId: "1:459316952223:web:f9644f10e96bdb1c8436aa"
};

  class Firebase {
    constructor(){
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
    }
  

  //Authorizing API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
    export default Firebase;