import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm();

      const {createUser, updateUserProfile} = useContext(AuthContext);
      const naviagte = useNavigate();

      const onSubmit = data =>{

        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                const userInfo = {
                    name:data.name,
                    email:data.email,
                    photoURL: data.photoURL

                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        console.log('user added to the database')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Created Succesful",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          naviagte('/home');

                    }
                })
               
               


            })
            .catch( error =>console.error(error));
        })
      }


   
    // console.log(watch("example"))

    return (
       
        <div>
            <h1 className="text-center text-3xl pt-15 lg:pt-20 font-bold">SIGN UP</h1>
            <div className="hero bg-base-200 min-h-screen my-10">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name"  {...register("name")} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  {...register("email")} name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"  {...register("password")} placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"   {...register("photoURL")} placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Sign Up'/>
          {/* <button className="btn btn-primary">Sign up</button> */}
        </div>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
		<Link to='/login'><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Login</a></Link>
	</p>
    </div>
    
</div>
        </div>
    );
};

export default SignUp;