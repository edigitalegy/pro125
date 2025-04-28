// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI3Ya2jg37KlFCDDVpWuy3NH5Qqz-KKPw",
  authDomain: "pro125-23661.firebaseapp.com",
  projectId: "pro125-23661",
  storageBucket: "pro125-23661.firebasestorage.app",
  messagingSenderId: "892229541857",
  appId: "1:892229541857:web:cbed2bf86eeb13bdb73ca0"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
