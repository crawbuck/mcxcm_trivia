import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth();
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    return (console.log(errorCode, errorMessage));
  }
};

export const signUserIn = async (email, password) => {
  const auth = getAuth();
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    return (console.log(errorCode, errorMessage));
  }
};

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

export const signUserOut = async () => {
  const auth = getAuth();
  const response = await auth.signOut();
  console.log(response);
};
