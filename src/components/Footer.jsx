import logo from "../assets/logo-dark.svg";
import { RxTwitterLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { FiSend } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="pt-12 bg-dark-gray" style={{ boxShadow: "0 0 0 100vmax #110C0D", clipPath: "inset(0-100vmax)" }}>
            <div className="flex flex-wrap gap-8 justify-between text-gray-400 items-center">
                <div className="lg:w-1/3 space-y-3">
                    <img src={logo} className="w-24" alt="" />
                    <p className="font-josefin ">Empower your little chefs with Whisk & Play. Ignite their passion with engaging culinary toys</p>
                </div>

                <div className="flex flex-col space-y-4">
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                    <a href="#">Our Blog</a>
                </div>

                <div className="flex flex-col space-y-4">
                    <a href="#">Terms And Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>

                <div>
                    <div className="relative text-gray-300">
                        <h4 className="text-2xl font-josefin mb-1">Newsletter</h4>
                        <input className="bg-transparent border-b focus:outline-0 pl-2 pr-6 py-1 text-lg" type="email" name="email" placeholder="Your Email" />
                        <button><FiSend className="text-primary absolute left-52 bottom-2 text-2xl" /></button>
                    </div>
                </div>

            </div>
            <div className="border-b border-gray-900 mt-8" />
            <div className="py-4 flex flex-col gap-6 md:items-center justify-between md:flex-row text-neutral-300">
                {/* <p className="font-light text-sm">Privacy Policy | Terms & Conditions</p> */}
                <p className="font-light text-sm"> © 2023 <span className="text-secondary hover:underline">Whisk & Play</span>, All Rights Reserved.</p>
                <div className="flex gap-3 items-center text-[19px]">
                    <span className="uppercase mr-2 text-base">Follow Us</span>
                    <a href="/" target="_blank" rel="noopener noreferrer"><RxTwitterLogo /></a> 
                    <a href="/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a> 
                    <a href="/" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a> 
                    <a href="/" target="_blank" rel="noopener noreferrer"><TbBrandGithub /></a> 
                </div>
            </div>
        </div>
    );
};

export default Footer;