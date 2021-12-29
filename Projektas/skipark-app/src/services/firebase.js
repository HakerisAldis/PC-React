import { getDocs, collection, getFirestore, query, where, doc } from 'firebase/firestore';

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

export const firebaseService = {
  get,
  getByReference
};