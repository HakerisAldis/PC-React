import { getDocs, collection, getFirestore, query, where, doc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, getAuth, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { COLLECTIONS } from '../constants/collections';

async function getItems (queryItems) {
  const data = await getDocs(query(...queryItems));

  const result = [];
  data.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));

  return result;
}

async function get (collectionName) {
  const database = getFirestore();

  const queryItems = [
    collection(database, collectionName)
  ];

  const data = await getItems(queryItems);
  return data;
}

async function getByReference (collectionName, refCollectionName, referenceField) {
  const database = getFirestore();
  const reference = doc(collection(database, refCollectionName), referenceField.value);

  const queryItems = [
    collection(database, collectionName),
    where(referenceField.name, '==', reference)
  ];

  const data = await getItems(queryItems);
  return data;
}

async function login (email, password) {
  const auth = getAuth();
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
}

async function register (email, password, city, name, lastname) {
  const auth = getAuth();
  const database = getFirestore();
  const result = await createUserWithEmailAndPassword(auth, email, password).then(cred => {
    setDoc(doc(database, COLLECTIONS.USERS, cred.user.uid), {
      name: name,
      lastname: lastname,
      city: city
    });
  });
  return result;
}

async function signOutUser () {
  const auth = getAuth();
  const result = await signOut(auth);
  return result;
}

async function getById (collectionName, id) {
  const database = getFirestore();

  const docRef = doc(database, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export const firebaseService = {
  get,
  getByReference,
  login,
  signOutUser,
  register,
  getById
<<<<<<< HEAD
};
=======
};
>>>>>>> ba94c08257a2bc597ee233fddb32bd9de70ebfe5
