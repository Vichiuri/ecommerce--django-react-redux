importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyC0sai-_zXxl5WkgWaxUSXdpIPgX1a0gVg",
  authDomain: "bizapp-f9375.firebaseapp.com",
  projectId: "bizapp-f9375",
  storageBucket: "bizapp-f9375.appspot.com",
  messagingSenderId: "141856256082",
  appId: "1:141856256082:web:792bcdcf8324e552016f8b",
  measurementId: "G-YGN2JRLMCD",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
