import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/messaging';

<script src="https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js"></script>
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_O8hzDN5OcR4j14UpLOe69ARstmJ5B5I",
  authDomain: "taichinhtieudung-97598.firebaseapp.com",
  databaseURL: "https://taichinhtieudung-97598-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taichinhtieudung-97598",
  storageBucket: "taichinhtieudung-97598.appspot.com",
  messagingSenderId: "1069062110190",
  appId: "1:1069062110190:web:08c4b42946ed060e14ecff",
  measurementId: "G-YK17GSQ5DN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
   export default firebase