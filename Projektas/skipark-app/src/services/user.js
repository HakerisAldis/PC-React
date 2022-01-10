<<<<<<< HEAD
import { firebaseService } from './firebase';
import { COLLECTIONS } from '../constants/collections';

async function login (email, password) {
  const result = await firebaseService.login(email, password);
  return result;
}

async function signOutUser () {
  const result = await firebaseService.signOutUser();
  return result;
}

async function register (email, password, city, name, lastname) {
  const result = await firebaseService.register(email, password, city, name, lastname);
  return result;
}

async function getById (id) {
  const result = await firebaseService.getById(COLLECTIONS.USERS, id);
  return result;
}

export const userService = {
  login,
  signOutUser,
  register,
  getById
};
=======
import { firebaseService } from "./firebase";
import { COLLECTIONS } from '../constants/collections';

async function login (email, password) {
    const result = await firebaseService.login(email, password);
    return result;
}

async function signOutUser () {
    const result = await firebaseService.signOutUser();
    return result;
}

async function register (email, password, city, name, lastname) {
    const result = await firebaseService.register(email, password, city, name, lastname);
    return result;
}

async function getById (id) {
    const result = await firebaseService.getById(COLLECTIONS.USERS, id);
    return result;
}

export const userService = {
    login,
    signOutUser,
    register,
    getById
};
>>>>>>> ba94c08257a2bc597ee233fddb32bd9de70ebfe5
