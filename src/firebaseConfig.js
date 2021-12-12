import firebase from 'firebase'

const config = {
    apiKey: process.env.VUE_APP_api_key,
    authDomain: process.env.VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.appId,
}

firebase.initializeApp(config)

export default firebase