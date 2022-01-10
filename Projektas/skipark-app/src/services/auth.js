<<<<<<< HEAD
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { UserContext } from '../constants/contexts';
import PropTypes from 'prop-types';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getAuth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <UserContext.Provider value={ currentUser }>
      { children }
    </UserContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
=======
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
>>>>>>> ba94c08257a2bc597ee233fddb32bd9de70ebfe5
