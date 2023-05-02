import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }


    const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }


    const sendPassword =(email) => { 
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
        


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courantUser => {
            setUser(courantUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    // console.log(user)

    const authInfo = {
        createUserEmailPassword,
        user,
        userLogin,
        logOut,
        sendPassword,
        updateUserInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;