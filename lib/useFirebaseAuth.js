import { useState, useEffect } from "react";
import firebase from "./firebase";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setIsLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setIsLoading(true);
  };

  const signInWithEmailAndPassword = (
    email,
    password // Login with email and password
  ) => firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (
    email,
    password // register with email and password
  ) => firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => firebase.auth().signOut().then(clear); // Logout

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  });

  return {
    authUser,
    isLoading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
