import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCAtI-N8JXKgF6SvxHZj7daPkQ4OJWmZfg",
  authDomain: "mybolg-ff2a2.firebaseapp.com",
  databaseURL: "https://mybolg-ff2a2.firebaseio.com",
  projectId: "mybolg-ff2a2",
  storageBucket: "mybolg-ff2a2.appspot.com",
  messagingSenderId: "1083262501791",
  appId: "1:1083262501791:web:d1bb75aad871d4070273aa",
  measurementId: "G-23KM7NG592"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const blogsCollection = db.collection('blogs')
const commitCollection = db.collection('commit')
const touristCollection = db.collection('tourist')
const linksCollection = db.collection('links')
const categoryCollection = db.collection('category')

// export utils/refs
export {
  db,
  auth,
  blogsCollection,
  usersCollection,
  commitCollection,
  touristCollection,
  linksCollection,
  categoryCollection,
}