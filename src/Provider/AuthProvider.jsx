import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";

const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

//rsc part 
const AuthProvider = ({children}) => {






    return (
    <AuthProvider.Provider value = {}>
            {children}
    </AuthProvider.Provider>
        
    );
};

export default AuthProvider;