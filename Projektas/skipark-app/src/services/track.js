import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(
    COLLECTIONS.TRACKS
  );

  return result;
}

export const trackService = {
  getAll
};