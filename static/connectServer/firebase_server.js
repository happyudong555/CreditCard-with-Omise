import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyC466-EvXN-kMX_-lj_A5zR2aEA8b-2jzo",
  authDomain: "i-shop-d12d9.firebaseapp.com",
  databaseURL: "https://i-shop-d12d9.firebaseio.com",
  projectId: "i-shop-d12d9",
  storageBucket: "i-shop-d12d9.appspot.com",
  messagingSenderId: "782958986282",
  appId: "1:782958986282:web:79bbb9a306a79298"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase