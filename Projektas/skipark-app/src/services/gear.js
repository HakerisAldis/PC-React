import { firebaseService } from './firebase';

async function getAll (collection) {
  const result = await firebaseService.get(
    collection
  );

  return result;
}

export const gearService = {
  getAll
};
