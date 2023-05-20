import useTitle from "../../hooks/UseTitle";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Foodography from "./Foodography";
import OurBrands from "./OurBrands";
import Toys from "./Toys";

const Home = () => {

    useTitle("Home");

    return (
        <>
            <Banner />
            <Foodography />
            <Toys />
            <ChooseUs />
            <OurBrands/>
        </>
    );
};

export default Home;