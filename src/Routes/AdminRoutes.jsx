// import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
// import { AuthContext } from "../Providers/AuthProvider";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = (children) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>

    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login'state={{from: location}} replace></Navigate>
  
};

export default AdminRoutes;