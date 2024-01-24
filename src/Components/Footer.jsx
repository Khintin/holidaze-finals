import Logo from "../assets/logo.png";
import FacebookIcon from "../assets/icons8-facebook-48.png";
import InstaIcon from "../assets/icons8-insta-40.png";
import TwitterIcon from "../assets/icons8-twitter-circled-48.png";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col bg-blue-200 justify-center py-10 ">
                <div className="flex flex-col items-center">
                    <img src={Logo} alt="Logo" className="w-28" />
                    <div className="flex flex-row justify-center gap-5">
                        <img src={FacebookIcon} alt="Instafram Icon" className="h-10" />
                        <img src={InstaIcon} alt="Instafram Icon" className="h-10" />
                        <img src={TwitterIcon} alt="Twitter Icon" className="h-10" />
                    </div>
                    <div className="p-4">
                        <h4 className="text-base font-medium">
                            Sign up and we'll send the best deals to you
                        </h4>

                        <form action="/email" method="get">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm text-gray-600"
                            ></label>
                            <div className="flex">
                                <input
                                    type="text"
                                    id="email"
                                    name="q"
                                    placeholder="Enter your email"
                                    className="p-2 border border-gray-300 rounded-l w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-400 hover:text-black text-white p-2 rounded-r"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <span className="text-center">Copyright 2023 Cristina Syversen Inc.</span>
            </footer>
        </>
    );
}
