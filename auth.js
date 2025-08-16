let { initializeApp } = require('firebase/app');
let { getAuth } = require('firebase/auth');
let { getDatabase } = require('firebase/database');

function authh() {
    let app = initializeApp({
        apiKey: "AIzaSyCvLo2G8n1jS5d9YLp0AqwdRhEM7YUwjlQ",
        authDomain: "madfut-25.firebaseapp.com",
        projectId: "madfut-25",
        storageBucket: "madfut-25.appspot.com",
        messagingSenderId: "894053920033",
        databaseURL: "https://mf25-trading-invites-queue.europe-west1.firebasedatabase.app/",
        appId: "1:894053920033:ios:d5b58f5af6066c9520a260"
    });

    let auth = getAuth(app);
    let db = getDatabase(app);

    return {auth, app, db};
}

module.exports = {authh};
