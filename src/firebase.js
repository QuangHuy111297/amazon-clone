import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyDCXN9T4UABALtYjt2tCiSuMjB7rLYag74',
    authDomain: 'e-clone-d5ef2.firebaseapp.com',
    projectId: 'e-clone-d5ef2',
    storageBucket: 'e-clone-d5ef2.appspot.com',
    messagingSenderId: '62939281784',
    appId: '1:62939281784:web:cc37209b126dcc4209b08d',
    measurementId: 'G-TBTSKK2Z98',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }
