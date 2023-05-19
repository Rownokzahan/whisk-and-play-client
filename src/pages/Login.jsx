import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogins from "../components/SocialLogins";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                form.reset();
                navigate(from);
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="flex w-[16rem] md:w-[30rem] flex-col mx-auto my-10 border p-12 rounded shadow">
            <div className="text-center text-3xl font-medium font-josefin tracking-tight">Log In</div>
            <p className="text-center text-gray-400 mt-1">Please login using account detail bellow.</p>

            <p className='text-red-600 font-bold mt-4 text-center'>{errorMessage}</p>
 
            <form onSubmit={handleLogin}>
                <div className="relative mt-8">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="w-full p-3 border focus:outline-2 focus:outline-slate-300" required />
                </div>
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full p-3 border focus:outline-2 focus:outline-slate-300" required />
                </div>
                <p className="mt-2 ml-1 cursor-pointer text-gray-400 text-sm" >Forgot Password?</p>

                <div className="my-6">
                    <button type="submit" className="bg-primary text-white font-semibold text-xl py-3 w-full">Log in</button>
                </div>
                <p className="text-center text-gray-400 text-sm">
                    Don&apos;t have account?
                    <Link to="/register" className="ml-1 underline-offset-4 hover:underline" >Create One</Link>
                </p>
            </form>
            <SocialLogins/>
        </div>
    );
};

export default Login;