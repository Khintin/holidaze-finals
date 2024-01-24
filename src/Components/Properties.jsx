import HotelImage from "../assets/hotel.jpg";
import StarIcons from "../assets/icons8-star-64.png";
import MapIcon from "../assets/icons8-map-48.png";
import HotelPoolImage from "../assets/hotelpool.jpg";

export default function Properties() {
    return (
        <>
            <section className="my-10 ">
                <div className="flex flex-col lg:flex-row items-center">
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                    <h2 className="basis-1/3 flex-shrink-0 min-w-[250px] text-center text-xl font-bold">
                        PROPERTIES
                    </h2>
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                </div>

                <div className="bg-blue-100 max-w-7xl mx-auto flex flex-row my-10 items-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-10">
                        <div className="p-8 bg-blue-200  rounded">
                            <img
                                src={HotelImage}
                                alt="Sea Side"
                                className="w-full border-gray-200 border object-cover h-48"
                            />
                            <div />
                            <div className="flex flex-row mt-2 justify-between">
                                <h2 className=" sm:text-xl lg:text-base font-bold my-2">
                                    Hotel Italy
                                </h2>
                                <div className="flex flex-row mt-2">
                                    <img src={StarIcons} alt="icon star" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                </div>
                            </div>
                            <div className="flex flex-row mt-2 gap-2 ">
                                <div>
                                    <img src={MapIcon} alt="Map Icon" className="h-6" />
                                </div>
                                <h3 className="font-semibold">Italy</h3>
                            </div>
                            <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                                <a>Modify Property</a>
                            </div>
                        </div>

                        <div className="p-8 bg-blue-200  rounded">
                            <img
                                src={HotelPoolImage}
                                alt="Sea Side"
                                className="w-full border-gray-200 border object-cover h-48"
                            />
                            <div />
                            <div className="flex flex-row mt-2 justify-between">
                                <h2 className=" sm:text-xl lg:text-base font-bold my-2">
                                    Hotel Grand Canaria
                                </h2>
                                <div className="flex flex-row mt-2">
                                    <img src={StarIcons} alt="icon star" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                    <img src={StarIcons} alt="icon link" className="h-5" />
                                </div>
                            </div>
                            <div className="flex flex-row mt-2 gap-2 ">
                                <div>
                                    <img src={MapIcon} alt="Map Icon" className="h-6" />
                                </div>
                                <h3 className="font-semibold">Italy</h3>
                            </div>
                            <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                                <a>Modify Property</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
