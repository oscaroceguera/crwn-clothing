import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAxN0R9gSS-7nAP0UlDO0u5Hre6pIX11fs",
  authDomain: "crwn-db-bd546.firebaseapp.com",
  databaseURL: "https://crwn-db-bd546.firebaseio.com",
  projectId: "crwn-db-bd546",
  storageBucket: "",
  messagingSenderId: "2680070782",
  appId: "1:2680070782:web:435c652163d5b47886ae2f"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log("TCL: createUserProfileDocument -> error", error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase