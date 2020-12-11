import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBo1LVVBiZULQBkj2SqAmAHkojLonBXqCg",
    authDomain: "project-1-91100.firebaseapp.com",
    databaseURL: "https://project-1-91100.firebaseio.com",
    projectId: "project-1-91100",
    storageBucket: "project-1-91100.appspot.com",
    messagingSenderId: "450797123263",
    appId: "1:450797123263:web:107990718b1235dfc1b80a"
  };

  const auth=firebase.auth()
  const provider=firebase.auth.GoogleAuthProvider()

  export {auth,provider}