import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

//rsc part 
const AuthProvider = ({children}) => {

// state 
const [user, setUser] = useState(null)



// google login 
const googleLogin = ()=> {
    return signInWithPopup(auth, googleProvider)
}


// sign up 
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}



// sign in 
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email,password)
}

// log out
const logout = () => {
    return signOut(auth)
}





// user can stay until he log out (facebook)
useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });
},[])

// alternative of useState
// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser)
//     });
//     return () => {
//         unsubscribe()
//     }
// },[])
console.log(user);





// export function 
const authentication = {
    googleLogin,  createUser,signIn ,logout, user
}

    return (
    <AuthContext.Provider value = {authentication}>
            {children}
    </AuthContext.Provider>
        
    );
};

export default AuthProvider;



/*
 * 1. const AuthContext = createContext()
 * 2. {children} in component and this {children} use in the middle of AuthProvider
 * 3. call the AuthProvider in main.jsx file
 * 
 * 
*/