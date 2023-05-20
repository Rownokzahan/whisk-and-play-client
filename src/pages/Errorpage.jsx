import { Link, useRouteError } from 'react-router-dom';
import img1 from '../assets/error.png';
import img2 from '../assets/error2.png';
import useTitle from '../hooks/UseTitle';

const ErrorPage = () => {

    useTitle("Error");
    const { error } = useRouteError();
    const errorMessage = error?.message || "Oops! We couldn't find the page you were looking for. Please check the URL and try again.";

    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center h-screen md:gap-8'>
            <div className='max-w-lg text-center'>
                <div className='flex text-7xl md:text-9xl font-extrabold gap-1 mb-8 text-dark-gray  w-max mx-auto'>
                    4<img src={img2} alt="Error" className="w-12 md:w-28 mt-3" />4
                </div>
                <p className="text-2xl font-bold md:mb-8 font-josefin">{errorMessage}</p>
                <Link to="/">
                    <button className="text-primary hover:underline">
                        Go back to homepage
                    </button>
                </Link>
            </div>
            <img className='md:h-96' src={img1} alt="" />
        </div>
    );
};

export default ErrorPage;
