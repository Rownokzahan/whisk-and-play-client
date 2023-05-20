import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/UseTitle";

const ToyDetails = () => {

    useTitle("Toy Details");
    const toy = useLoaderData()[0];
    const {
        imageURL,
        ToyName,
        price,
        ratings,
        availableQuantity,
        sellerName,
        sellerEmail,
        description,
        category,
    } = toy;

    return (
        <div className="my-12 grid md:grid-cols-2 gap-10">
            <img src={imageURL} alt="" />

            <div className="space-y-6">
                <h2 className="text-4xl font-josefin">{ToyName}</h2>

                <div className="space-y-5">
                    <p className="text-3xl font-semibold text-primary tracking-wide">{price}</p>
                    <Rating className="mt-2" style={{ maxWidth: 90 }} value={ratings} readOnly />
                </div>

                <div className="text-base font-semibold space-y-4 tracking-wide">
                    <p>Category: {category}</p>
                    <p>
                        Avaiablity:
                        <span className="text-primary ml-2">
                            {availableQuantity} left in stock
                        </span>
                    </p>
                    <p>Seller: {sellerName}, Email: {sellerEmail}</p>
                </div>

                <p className="text-gray-600 font-josefin">Description: {description}</p>
                <button className="w-full py-4 font-semibold bg-primary text-white">Buy It Now</button>
            </div>
        </div>
    );
};

export default ToyDetails;