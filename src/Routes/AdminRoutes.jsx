// import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAuth from "../Hooks/useAuth";
// import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoutes = ({children}) => {
    console.log(useContext)
    const {user,loading} = useContext(AuthContext);
    // console.log(use);
    const [isAdmin, isAdminLoading] = useAdmin();
    // const loading = true, user= null;;
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>

    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/home'state={{from: location}} replace></Navigate>
  
};

export default AdminRoutes;