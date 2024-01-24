import { Link } from "react-router-dom";
import PartnerAvatar from "..//assets/partneravatar.png";
import MapPointer from "../assets/icons8-pointer-67.png";
import Properties from "../Components/Properties";

export default function PartnerProfilePage() {
    return (
        <>
            <section className="blurdbackground bg-cover flex flex-row justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-blue-100 p-8 bg-opacity-60">
                    <img src={PartnerAvatar} alt="" className="h-32 shadow-xl" />
                    <h2 className="text-2xl font-semibold">Tina Syv</h2>
                    <div className="flex flex-row my-2 gap-2">
                        <img src={MapPointer} alt="" className="h-6"></img>
                        <p className="text-xl font-semibold">Oslo</p>
                    </div>
                    <p className="text-base font-medium">Email: tinasyv@tina.com</p>
                    <div className="gap-3 flex flex-row ">
                        <button className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black">
                            Message
                        </button>
                        <button className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black">
                            View Properties
                        </button>
                        <button className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black">
                            <Link to="/login">Log Out</Link>
                        </button>
                    </div>
                </div>
            </section>
            <div className="my-20 ">
                <Properties />
            </div>
        </>
    );
}