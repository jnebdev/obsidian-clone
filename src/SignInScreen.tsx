import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA41FOO498fdyhYNwRDm7Y4TZlotrmKlCU',
  authDomain: 'obsidian-clone.firebaseapp.com',
  databaseURL: 'https://obsidian-clone-default-rtdb.firebaseio.com',
  projectId: 'obsidian-clone',
  storageBucket: 'obsidian-clone.appspot.com',
  messagingSenderId: '880875576520',
  appId: '1:880875576520:web:003f442d9cf877753c59fd',
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID],
};

export default function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
