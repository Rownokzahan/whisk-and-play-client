import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogins = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignin = () => {
        signInWithGithub()
            .then(() => {
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="relative my-10">
                <hr className="border-b" />
                <span className="bg-white text-gray-500 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Or continue with</span>
            </div>

            <div className="text-3xl text-center flex gap-6 items-center justify-center">
                <button onClick={handleGoogleSignin}><FcGoogle /></button>
                <button onClick={handleGithubSignin}><BsGithub /></button>
            </div>
        </>
    );
};

export default SocialLogins;