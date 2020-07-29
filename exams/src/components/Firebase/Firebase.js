
import app from 'firebase/app'
import * as roles from '../../constants/roles'
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBOXNXqHXLaVgWQPIMugCRgKOUuW8S6_YA",
    authDomain: "login-for-exam-app.firebaseapp.com",
    databaseURL: "https://login-for-exam-app.firebaseio.com",
    projectId: "login-for-exam-app",
    storageBucket: "login-for-exam-app.appspot.com",
    messagingSenderId: "760784443944",
    appId: "1:760784443944:web:57f4b460bc8ac08c8ff31d",
    measurementId: "G-2XXBQJ8J50"
  };

  class Firebase
  {
      constructor()
      {
          app.initializeApp(firebaseConfig);

          this.auth=app.auth();
          this.db = app.database();
      }
      // *** Auth API ***
 
        doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
 
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
 
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
 
            next(authUser);
          });
      } else {
        fallback();
      }
    });

    // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
  }

export default Firebase;
