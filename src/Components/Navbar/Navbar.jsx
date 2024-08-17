import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
// import useAdmin from "../../Hooks/useAdmin";  

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  // const [isAdmin] = useAdmin();
  const handleLogOut = () =>{
    logOut()
    .then(()=>{}) 
    .catch(error => console.log(error));

  }
    const nav = <>
    <li className="text-white font-semibold  hover:text-green-500 text-xl"><NavLink to='/home'><a >Home</a></NavLink></li>
    <li className="text-green-white font-semibold italic hover:text-green-500 text-xl"><NavLink to='/product'><a >Products</a></NavLink></li>
    <li className="text-green-white font-semibold italic hover:text-green-500 text-xl"><NavLink to='/dashboard'><a >Dashboard</a></NavLink></li>
    {/* {
      user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
    } */}
    {user ? (
            <>
              <div className="lg:tooltip lg:mt-4" data-tip={user?.displayName}>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="btn border-none outline-none lg:mt-2  bg-green-500 text-white ml-2">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="btn bg-green-500 outline-none border-none text-white">Login</li>
              </Link>
            </>
          )} 
    {/* {
      user? <>
      <span>{user?.displayName}</span>
      <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
      </> : <>
      <li className="text-green-500 font-semibold italic text-xl"><NavLink to='/login'><a >Login</a></NavLink></li>
       </>
    } */}
    
    </>
    return (
        <div>
            <div className="navbar lg:max-w-6xl max-w-xl md:max-w-3xl mx-auto  fixed z-10 bg-black text-cyan-50 bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-3xl font-bold italic">Tech<span className="text-green-500">ProductsHunt</span></a>
  </div>
  
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;