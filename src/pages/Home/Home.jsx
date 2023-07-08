import useTitle from "../../hooks/UseTitle";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Foodography from "./Foodography";
import OurBrands from "./OurBrands";
import Reviews from "./Reviews";
import Toys from "./Toys";
import Video from "./Video";

const Home = () => {

    useTitle("Home");

    return (
        <>
            <Banner />
            <Foodography />
            <Toys />
            <ChooseUs />
            <Video />
            <OurBrands />
            <Reviews />
        </>
    );
};

export default Home;