import { useEffect, useState } from "react";
import ToyCard from "../../components/cards/ToyCard";

const Toys = () => {

    const [toys, setToys] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Baking Kits");

    useEffect(() => {
        fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys?category=${activeCategory}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeCategory]);

    return (
        <div className='mb-28'>
            <div className='bg-[#F1F1F1] font-josefin rounded-lg p-2 md:p-3 md:text-2xl text-dark-gray flex items-center w-max mx-auto'>
                <button
                    onClick={() => setActiveCategory("Baking Kits")}
                    className={`p-3 md:px-8 lg:px-12 rounded-lg 
                    ${activeCategory === "Baking Kits" ? "bg-white text-primary shadow-md" : ""}`}>
                    Baking Kit
                </button>
                <button
                    onClick={() => setActiveCategory("Utensils")}
                    className={`p-3 md:px-8 lg:px-12 rounded-lg ${activeCategory ==="Utensils" ? "bg-white text-primary shadow-md" :""}`}>
                    Utensils
                </button>
                <button
                    onClick={() => setActiveCategory("Food Prep Tools")}
                    className={`p-3 md:px-8 lg:px-12 rounded-lg ${activeCategory ==="Food Prep Tools" ? "bg-white text-primary shadow-md" :""}`}>
                    Food Prep
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
                {toys?.map(toy=><ToyCard key={toy._id} toy={toy}/>)}
            </div>
        </div>
    );
};

export default Toys;