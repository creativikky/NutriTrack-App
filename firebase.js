<!-- Firebase App (core) -->
<script src="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyAsSdKm43H4dyjKGHtTN6ahwH6RwVcSdYo",
    authDomain: "nutritrack-12b26.firebaseapp.com",
    projectId: "nutritrack-12b26",
    storageBucket: "nutritrack-12b26.firebasestorage.app",
    messagingSenderId: "1034235028376",
    appId: "1:1034235028376:web:ce52c8ca6d1e6a993141ed"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
