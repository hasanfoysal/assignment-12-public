import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Login = () => {
	const axiosPublic = useAxiosPublic();
	const auth = getAuth(app);
	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();
	const handleGoogleSignIn = () =>{
		signInWithPopup(auth, provider)
		.then(result =>{
			console.log(result.user);
			const userInfo = {
				email: result.user?.email,
				name: result.user?.displayName,
				photoURL: result.user?.photoURL
			}
			axiosPublic.post('/users', userInfo)
			.then(res=>{
				console.log(res.data);
				naviagte('/home')

			})
		})
		.catch(error =>{
			console.log('error', error.message)
		})
	}


    const {signIn} = useContext(AuthContext);
	const naviagte = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/home';

    const handleLogin =event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
			Swal.fire({
				title: "Login Succesful",
				showClass: {
				  popup: `
					animate__animated
					animate__fadeInUp
					animate__faster
				  `
				},
				hideClass: {
				  popup: `
					animate__animated
					animate__fadeOutDown
					animate__faster
				  `
				}
			  });
			  naviagte(from, {replace: true});
        })
    }
    return (
        <div>
             <h1 className="text-center font-bold text-3xl pt-15 md:pt-15 lg:pt-20">PLEASE LOGIN!</h1>
            <div onSubmit={handleLogin} className="w-full max-w-md mx-auto my-6  p-8 space-y-3 rounded-xl bg-gray-500 text-white">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">Email</label>
			<input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
			
		</div>
        <input className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-violet-600" type="submit" value='Login' />
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<Link to='/signUp'><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</a></Link>
	</p>
</div>
        </div>
    );
};

export default Login;