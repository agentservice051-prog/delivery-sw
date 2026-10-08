// firebase-messaging-sw.js
// Этот файл работает в фоне

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// ⚠️ ВСТАВЬТЕ СЮДА ВАШ firebaseConfig
firebase.initializeApp({
  apiKey: "AIzaSyDr6ChAHl1RaZ9Vs5P0fz2xPXgbHXp5MFk",
  authDomain: "delivery-system-11b58.firebaseapp.com",
  projectId: "delivery-system-11b58",
  storageBucket: "delivery-system-11b58.firebasestorage.app",
  messagingSenderId: "561159654594",
  appId: "1:561159654594:web:1a3a7e4c6877e91deb7f5b"
});

const messaging = firebase.messaging();

// Обработка сообщений в фоне
messaging.onBackgroundMessage((payload) => {
  console.log('Фоновое сообщение получено:', payload);
  
  const notificationTitle = payload.notification?.title || 'Нужна доставка!';
  const notificationOptions = {
    body: payload.notification?.body || 'Нажмите для просмотра',
    icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png',
    vibrate: [300, 100, 300, 100, 300],
    sound: 'default' // Использует системный звук уведомлений
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});