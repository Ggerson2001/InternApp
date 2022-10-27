import firebase from "firebase/app"
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDQD8hpiCbBZae2l4CFO96hKgTA7hgBDxk",
    authDomain: "internshipposts.firebaseapp.com",
    projectId: "internshipposts",
    storageBucket: "internshipposts.appspot.com",
    messagingSenderId: "136872982640",
    appId: "1:136872982640:web:bbd04434f930aece1f9cb5"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();