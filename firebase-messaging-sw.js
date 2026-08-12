importScripts('https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCjh-8QKGlPXvaGebV4mUzOS1nZTsvic24",
  authDomain: "notif-pronos.firebaseapp.com",
  projectId: "notif-pronos",
  storageBucket: "notif-pronos.firebasestorage.app",
  messagingSenderId: "38774071291",
  appId: "1:38774071291:web:9a651309225128598d355e"
});

const messaging = firebase.messaging();
