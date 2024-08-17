
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className="card w-52 lg:w-96 mx-auto mt-5 bg-base-100 shadow-xl">
        <figure>
          <img
            src={user?.photoURL}
            alt="Avatar"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
        </div>
        <Link to='/dashboard/payment'><button className="text-white bg-green-600 my-6 mx-auto  shadow-lime-600 rounded-xl w-24 lg:w-32"> Membership Subscribe</button>
        </Link>
      </div>
      
      
    );
};

export default MyProfile;