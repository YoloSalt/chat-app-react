importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

    firebase.initializeApp({
        apiKey: "AIzaSyA_O8hzDN5OcR4j14UpLOe69ARstmJ5B5I",
  authDomain: "taichinhtieudung-97598.firebaseapp.com",
  databaseURL: "https://taichinhtieudung-97598-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taichinhtieudung-97598",
  storageBucket: "taichinhtieudung-97598.appspot.com",
  messagingSenderId: "1069062110190",
  appId: "1:1069062110190:web:08c4b42946ed060e14ecff",
  measurementId: "G-YK17GSQ5DN"})
  
    
    const initMessaging = firebase.messaging()