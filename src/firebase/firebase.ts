// import app from "firebase";
// import "firebase/auth";
// import "firebase/firebase-firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyCxbb0NHsJFGbws8New65sPvy-s7WXsuNk",
//   authDomain: "gatsbyblogsite.firebaseapp.com",
//   databaseURL: "https://gatsbyblogsite.firebaseio.com",
//   projectId: "gatsbyblogsite",
//   storageBucket: "gatsbyblogsite.appspot.com",
//   messagingSenderId: "295053741184",
//   appId: "1:295053741184:web:266b190b1bebc805066a65",
//   measurementId: "G-H112DEFLVE",
// }


// const firebaseConfig = {
//   apiKey: "AIzaSyCDfu4ulC7i-11LSxzWNDGOXkMzkCg7pzM",
//   authDomain: "fir-auth-react-82aad.firebaseapp.com",
//   databaseURL: "https://fir-auth-react-82aad.firebaseio.com",
//   projectId: "fir-auth-react-82aad",
//   storageBucket: "fir-auth-react-82aad.appspot.com",
//   messagingSenderId: "808900258179",
//   appId: "1:808900258179:web:cdcc26e95a2c588248eeb6",
//   measurementId: "G-0R024XYQBD",
// };
// // Initialize Firebase

// class Firebase {
  
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//     this.db = app.firestore();
//   }

//   login(email, password) {
//     this.auth.signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     return this.auth.signOut();
//   }

//   async register(name, email, password) {
//     await this.auth.createUserWithEmailAndPassword(email, password);
//     return this.auth.currentUser.updateProfile({
//       displayName: name,
//     });
//   }

//   isInitialized() {
//     return new Promise((resolve) => {
//       this.auth.onAuthStateChanged(resolve);
//     });
//   }

//   getCurrentUsername() {
//     return this.auth.currentUser && this.auth.currentUser.displayName;
//   }
// }

// export default new Firebase();