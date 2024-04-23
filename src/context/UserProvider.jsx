import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, photoURL, phoneNumber, displayName, uid } = user;
        setUser({ email, photoURL, phoneNumber, displayName, uid });
      } else {
        setUser(null);
      }
    });

    return () => unsuscribe();
  }, []);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
