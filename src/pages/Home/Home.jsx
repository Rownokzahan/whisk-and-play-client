import useTitle from "../../hooks/UseTitle";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Foodography from "./Foodography";
import OurBrands from "./OurBrands";
import Reviews from "./Reviews";
import Toys from "./Toys";

const Home = () => {

    useTitle("Home");

    return (
        <>
            <Banner />
            <Foodography />
            <Toys />
            <ChooseUs />
            <OurBrands />
            <Reviews />
        </>
    );
};

export default Home;