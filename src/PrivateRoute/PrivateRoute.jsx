import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {


const {user,loading} = useAuth()
console.log(user);

// we have wait here 
// if(loading) return  <h3 className="text-6xl">Loading</h3>
if(!user){
    return <Navigate to={'/login'}></Navigate>
}



    return children;
};

export default PrivateRoute;