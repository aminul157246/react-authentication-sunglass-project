import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

//rsc part 
const AuthProvider = ({children}) => {

// state 
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)




// google login 
const googleLogin = ()=> {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}


// sign up 
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}



// sign in 
const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}

// log out
const logout = () => {
    return signOut(auth)
}

// update profile 
const updateProfileInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })

}

// user can stay until he log out (facebook)
useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
        // we have to use setLoading(true) because when we set it's value false this is set as a false. So, we set this true in other function
    });
},[])

// alternative of useState
// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser)
//         setLoading(true)
//     });
//     return () => {
//         unsubscribe()
//     }
// },[])


// console.log(user);





// export function 
const authentication = {
    googleLogin,  createUser,signIn ,logout, user ,loading,updateProfileInfo
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