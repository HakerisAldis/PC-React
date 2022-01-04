import { firebaseService } from "./firebase";

async function login (userName, password) {
    const result = await firebaseService.login(userName, password);
    return result;
}

async function signOutUser () {
    const result = await firebaseService.signOutUser();
    return result;
}

export const userService = {
    login,
    signOutUser
};