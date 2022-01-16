import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(
    COLLECTIONS.SNOWBOARDS
  );

  return result;
}

export const snowboardService = {
  getAll
};
