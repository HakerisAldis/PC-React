import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserContext } from "../constants/contexts";

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        getAuth().onAuthStateChanged(setCurrentUser);
    }, [])

    return (
        <UserContext.Provider value={ currentUser }>
            {children}
        </UserContext.Provider>
    );
}