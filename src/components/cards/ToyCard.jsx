import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyCard = ({ toy }) => {

    const { _id, imageURL, ToyName, ratings, price } = toy;

    return (
        <div className="rounded-md bg-[#FDFDFD] shadow  relative">
            <img src={imageURL} className="rounded-t-md h-44 w-full" alt="" />
            <div className="pb-10 p-2">
                <div className="flex justify-between gap-2 items-start pb-4">
                    <h4 className="font-semibold text-xl">{ToyName}</h4>
                    <Rating className="mt-2" style={{ maxWidth: 80 }} value={ratings} readOnly />
                </div>
                <div className="flex justify-between items-center absolute bottom-4 left-2 right-2">
                    <p>{price}</p>
                    <Link to={`toy-details/${_id}`} className="text-primary hover:underline duration-100 whitespace-nowrap">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;