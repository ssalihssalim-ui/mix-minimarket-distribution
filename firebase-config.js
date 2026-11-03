// ==================== FIREBASE CONFIGURATION - DISTRUBUTION ====================
// 🔥 NOUVEAU PROJET : distrubution-99caf (ami)

const firebaseConfig = {
    apiKey: "AIzaSyCAo4xh0kMGKE5Gps87gzPUTt6B-r28Vl8",
    authDomain: "distrubution-99caf.firebaseapp.com",
    databaseURL: "https://distrubution-99caf-default-rtdb.firebaseio.com",
    projectId: "distrubution-99caf",
    storageBucket: "distrubution-99caf.firebasestorage.app",
    messagingSenderId: "243848082782",
    appId: "1:243848082782:web:0ea9f289e573b4bce60bcf"
};

// Initialisation Firebase (version compat)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase initialisé avec le projet:', firebaseConfig.projectId);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Activer la persistance offline
db.enablePersistence()
    .then(() => console.log('📱 Mode hors ligne activé'))
    .catch(err => console.warn('⚠️ Persistance désactivée:', err));

console.log('☕ Distribution - Firebase OK');
console.log('✓ Projet:', firebaseConfig.projectId);
console.log('✓ Auth Domain:', firebaseConfig.authDomain);
