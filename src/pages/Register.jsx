import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogins from "../components/SocialLogins";

const Register = () => {
    const { register, setUserInfo } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;

        if (!name) {
            setErrorMessage("Invalid name")
            return;
        }

        if (!photo_url) {
            setErrorMessage("Invalid photo url")
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password can not be less than 6 characters');
            return;
        }

        register(email, password)
            .then(result => {
                setUserInfo(name, photo_url)
                    .then(() => {
                        form.reset();
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="flex w-[16rem] md:w-[30rem] flex-col mx-auto my-10 border p-12 rounded shadow">
            <div className="text-center text-3xl font-medium font-josefin tracking-tight">Register</div>
            <p className="text-center text-gray-400 mt-1">Please fill out the form bellow with your accurate information.</p>

            <p className='text-red-600 font-bold mt-4 text-center'>{errorMessage}</p>

            <form onSubmit={handleRegister}>
                <input type="name" name="name" placeholder="Name" className="w-full mt-6 p-3 border focus:outline-2 focus:outline-slate-300" required />
                <input type="email" name="email" placeholder="Email Address" className="w-full mt-6 p-3 border focus:outline-2 focus:outline-slate-300" required />
                <input type="password" name="password" placeholder="Password" className="w-full mt-6 p-3 border focus:outline-2 focus:outline-slate-300" required />
                <input type="text" name="photo_url" placeholder="Photo Url" className="w-full mt-6 p-3 border focus:outline-2 focus:outline-slate-300" required />

                <button type="submit" className="bg-primary text-white font-semibold text-xl py-3 w-full mt-6">Log in</button>
                <p className="text-center text-gray-400 text-sm mt-6">
                    Already have an account?
                    <Link to="/login" className="ml-1 underline-offset-4 hover:underline" >Login</Link>
                </p>
            </form>
            <SocialLogins />
        </div>
    );
};

export default Register;