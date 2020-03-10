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
  const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get()
  const collectionSnapshot = await collectionRef.get()
  console.log({ collectionSnapshot });
  
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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {} );
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef);

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const getCurrentUSer = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      unSubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase