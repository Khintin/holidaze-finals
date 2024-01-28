import { useEffect, useState } from "react";
import MainLogo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import { getUser, isUserVenueManager } from "../api/auth";
import { useAuth } from "../utils/AuthProvider";

export default function Navigation() {
    const { user } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        const _showMenu = !showMenu;
        setShowMenu(_showMenu);
    };

    return (
        <>
            <header className="bg-blue-200">
                <nav className="max-w-7xl mx-auto text-xs flex flex-row flex-wrap md:flex-nowrap text-center justify-between items-center">
                    <div className="">
                        <div className="flex flex-row ">
                            <Link to="/">
                                <img src={MainLogo} alt="logo" className="w-28" />
                            </Link>
                        </div>
                    </div>

                    <button className="block md:hidden p-4" onClick={handleShowMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>

                    <div
                        className={`${
                            showMenu ? "block basis-full" : "hidden"
                        } md:block text-white-700 mr-0 md:mr-5 py-4 md:py-0  md:border-0`}
                    >
                        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end h-full gap-4">
                            <li className="font-bold text-base text-gray-600 hover:bg-blue-500 hover:text-white p-1">
                                <Link to="/">
                                    <span className="p-2">HOME</span>
                                </Link>
                            </li>

                            {!user && (
                                <>
                                    <li className=" font-bold text-base text-gray-600 hover:bg-blue-500 hover:text-white p-1">
                                        <Link to="/login">
                                            <span className="p-2">LOG IN</span>
                                        </Link>
                                    </li>
                                    <li className=" font-bold text-base text-gray-600 hover:bg-blue-500 hover:text-white p-1">
                                        <Link to="/register">
                                            <span className="p-2">REGISTER</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {user && (
                                <li className=" font-bold text-base text-gray-600 hover:bg-blue-500 hover:text-white p-1">
                                    <Link to="/profile">
                                        <span className="p-2">PROFILE</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
