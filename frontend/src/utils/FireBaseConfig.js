import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyC0sai-_zXxl5WkgWaxUSXdpIPgX1a0gVg",
  authDomain: "bizapp-f9375.firebaseapp.com",
  projectId: "bizapp-f9375",
  storageBucket: "bizapp-f9375.appspot.com",
  messagingSenderId: "141856256082",
  appId: "1:141856256082:web:792bcdcf8324e552016f8b",
  measurementId: "G-YGN2JRLMCD",
};

initializeApp(firebaseConfig);

export const getTokenConfig = (swRegistration) => {
  const messaging = getMessaging();
  return getToken(messaging, {
    vapidKey:
      "BJoKEt9ezPdo5R1oyZeAoJE-FnedeuLXQj6pyJkfzkJ7MTV4JWz-W0rCX9gvZvC655zkpNAO_dgmKhCkZogGcM8",
    serviceWorkerRegistration: swRegistration,
  })
    .then((currentToken) => {
      if (currentToken) {
        return { status: true, token: currentToken, messaging: messaging };
      } else {
        return { status: false };
      }
    })
    .catch((err) => {
      return { status: false };
    });
};

export const onMessageListener = (
  setResponseMessage,
  setOpenTab,
  viewNotificationType,
  messaging
) => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      const { notification, data } = payload;
      setResponseMessage({
        title: notification?.title ?? "",
        message: notification?.body ?? "",
        data: data ?? {},
      });
      setOpenTab(true);
      viewNotificationType(data);
      resolve(payload);
    });
  });
};
