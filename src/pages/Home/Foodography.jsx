import img1 from "../../assets/foodography/1.avif";
import img2 from "../../assets/foodography/2.avif";
import img3 from "../../assets/foodography/3.avif";
import img4 from "../../assets/foodography/4.avif";
import img5 from "../../assets/foodography/5.avif";
import img6 from "../../assets/foodography/6.avif";
import img7 from "../../assets/foodography/7.avif";
import img8 from "../../assets/foodography/8.avif";
import img9 from "../../assets/foodography/9.avif";
import img10 from "../../assets/foodography/10.avif";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Foodography = () => {

    const imgNumbers = [...Array(10).keys()];

    function PrevArrow(props) {
        const { onClick } = props;
        console.log(props);
        return (
            <div onClick={onClick}>
                <BsArrowLeftCircle className="text-primary hover:text-secondary text-4xl -left-1 md:-left-4 top-1/2 -translate-y-1/2 absolute z-20"/>
            </div>
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        console.log(props);
        return (
            <div onClick={onClick}>
                <BsArrowRightCircle className="text-primary hover:text-secondary text-4xl -right-1 md:-right-4 top-1/2 -translate-y-1/2 absolute z-20" />
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        swipeToSlide: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="my-24">
            <h3 className="text-dark-gray text-3xl text-center font-bold mb-12">Playful Foodography</h3>

            <Slider {...settings}>
                {imgNumbers.map(num => <div key={num} className="rounded-xl w-64 h-60 overflow-hidden px-3">
                    <img className="rounded-xl h-full w-full object-cover ease-in duration-500 hover:scale-105" src={eval(`img${num + 1}`)} alt="" />
                </div>
                )}
            </Slider>
        </div>
    );
};

export default Foodography;