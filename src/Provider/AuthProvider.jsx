import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosLocal from "../Hooks/useAxiosLocal";

const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const localAxios = useAxiosLocal();
  const signIn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (name, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, name, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUSerProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const state = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const user = { email: currentUser.email };
        localAxios.post("/jwt", user).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          } else localStorage.removeItem("access-token");
        });
      }
      console.log("current User", currentUser);
      setLoading(false);
    });
    return () => {
      return state();
    };
  }, [localAxios]);
  const authInfo = {
    user,
    loading,
    signIn,
    loginUser,
    logOut,
    updateUSerProfile,
    signInGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
export default AuthContext;
