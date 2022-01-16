import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(
    COLLECTIONS.HELMETS
  );

  return result;
}

export const helmetService = {
  getAll
};
