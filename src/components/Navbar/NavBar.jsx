import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import logo from "../../assets/logo.svg";
import { MdLogin, MdLogout } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState();
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    const navItems = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/all-toys'>All Toys</ActiveLink>
        <ActiveLink to='/my-toys'>My Toys</ActiveLink>
        <ActiveLink to='/add-toy'>Add Toy</ActiveLink>
        <ActiveLink to='/blog'>Blogs</ActiveLink>
    </>

    return (
        <nav className="flex justify-between items-center py-8 my-2">
            <div className="flex gap-6 md:gap-10 lg:gap-20 items-center">
                <Link to='/'><img src={logo} className="h-10" alt="" /> </Link>

                <div className="hidden md:flex gap-6 lg:gap-12">
                    {navItems}
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                {user ?
                    <>
                        <img
                            src={user.photoURL}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt=""
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user.displayName}
                            data-tooltip-place="bottom"
                        />
                        <Tooltip className="z-20 bg-rose-400" id="my-tooltip" />
                        <button onClick={handleLogout} className="flex items-center bg-secondary rounded p-2 gap-1">
                            <MdLogout />
                            <span className="hidden md:flex">Logout</span>
                        </button>
                    </>
                    : <Link to='/login' className="flex items-center bg-secondary rounded p-2 gap-1">
                        <MdLogin />
                        <span className="hidden md:flex">Login</span>
                    </Link>
                }
                <div className="ml-3 md:hidden">
                    <button onClick={() => setShowMenu(true)}><HiMenuAlt1 className="text-2xl" /></button>
                </div>
            </div>

            <div className={`absolute z-20 bg-white md:hidden w-11/12 shadow rounded-ss-2xl rounded-ee-2xl border duration-150 ${showMenu ? "opacity-100 top-24" : "opacity-0 top-7"}`}>
                <div className="relative flex flex-col gap-4 p-6">
                    {navItems}
                    <button onClick={() => setShowMenu(false)}><HiOutlineXMark className="absolute top-2 right-2 text-2xl text-gray-700" /></button>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;