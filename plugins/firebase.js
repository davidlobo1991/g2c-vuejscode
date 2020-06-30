import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

// let firebaseApp = null

const config = {
  apiKey: 'AIzaSyD_hg9JgEOeJfoDbgk-58DmJpOiaiNDj1U',
  authDomain: 'quickstart-721ec.firebaseapp.com',
  databaseURL: 'https://quickstart-721ec.firebaseio.com',
  projectId: 'quickstart-721ec',
  storageBucket: 'quickstart-721ec.appspot.com',
  messagingSenderId: '1000499655102',
  appId: '1:1000499655102:web:4719b60a1fd9d4d0e289ef'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const storage = firebase.storage()

export { firebase, storage, db }
