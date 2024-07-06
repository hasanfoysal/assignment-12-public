import { FaAd, FaProductHunt, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex p-20 lg:p-32">
            <div className="lg:w-64 min-h-screen w-44 bg-orange-400"> <ul className="menu">
                {
                    isAdmin? <>
                    <li><NavLink to='/dashboard/manage'>
                <FaUser></FaUser>
                Manage Users</NavLink></li>
                    </>
                    :
                    <>

                    </>
                }
                <li><NavLink to='/dashboard/profile'>
                <FaUser></FaUser>
                My Profile</NavLink></li>
                <li><NavLink to='/dashboard/product'>
                <FaAd></FaAd>
                Add Product</NavLink></li>
                <li><NavLink to='/dashboard/products'>
                <FaProductHunt></FaProductHunt>
                My Products</NavLink></li>
                <li><NavLink to='/dashboard/users'>
                <FaUsers></FaUsers>
                All Users</NavLink></li>
            </ul></div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;