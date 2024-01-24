import SampleImage from "../assets/sampleimage.jpg";
import StarIcons from "../assets/icons8-star-64.png";
import MapIcon from "../assets/icons8-map-48.png";

export default function HotelFour() {
    return (
        <>
            <section className="my-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                    <h2 className="basis-1/3 flex-shrink-0 min-w-[250px] text-center text-xl font-bold">
                        POPULAR HOTEL DESTINATIONS
                    </h2>
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-10">
                    <div className="p-8 bg-blue-200  rounded">
                        <img
                            src={SampleImage}
                            alt="Sea Side"
                            className="w-full border-gray-200 border object-cover h-48"
                        />
                        <div />
                        <div className="flex flex-row mt-2 justify-between">
                            <h2 className=" sm:text-xl lg:text-base font-bold my-2">Hotel Italy</h2>
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
                            <a>View Hotel</a>
                        </div>
                    </div>

                    <div className="p-8 bg-blue-200  rounded">
                        <img
                            src={SampleImage}
                            alt="Sea Side"
                            className="w-full border-gray-200 border object-cover h-48"
                        />
                        <div />
                        <div className="flex flex-row mt-2 justify-between">
                            <h2 className=" sm:text-xl lg:text-base font-bold my-2">Hotel Spain</h2>
                            <div className="flex flex-row mt-2">
                                <img src={StarIcons} alt="icon star" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 gap-2 ">
                            <div>
                                <img src={MapIcon} alt="Map Icon" className="h-6" />
                            </div>
                            <h3 className="font-semibold">Spain</h3>
                        </div>
                        <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                            <a>View Hotel</a>
                        </div>
                    </div>

                    <div className="p-8 bg-blue-200  rounded">
                        <img
                            src={SampleImage}
                            alt="Sea Side"
                            className="w-full border-gray-200 border object-cover h-48"
                        />
                        <div />
                        <div className="flex flex-row mt-2 justify-between">
                            <h2 className=" sm:text-xl lg:text-base font-bold my-2">
                                Hotel Norway
                            </h2>
                            <div className="flex flex-row mt-2">
                                <img src={StarIcons} alt="icon star" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 gap-2 ">
                            <div>
                                <img src={MapIcon} alt="Map Icon" className="h-6" />
                            </div>
                            <h3 className="font-semibold">Norway</h3>
                        </div>
                        <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                            <a>View Hotel</a>
                        </div>
                    </div>

                    <div className="p-8 bg-blue-200  rounded">
                        <img
                            src={SampleImage}
                            alt="Sea Side"
                            className="w-full border-gray-200 border object-cover h-48"
                        />
                        <div />
                        <div className="flex flex-row mt-2 justify-between">
                            <h2 className=" sm:text-xl lg:text-base font-bold my-2">
                                Hotel Germany
                            </h2>
                            <div className="flex flex-row mt-2">
                                <img src={StarIcons} alt="icon star" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                                <img src={StarIcons} alt="icon link" className="h-6" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 gap-2 ">
                            <div>
                                <img src={MapIcon} alt="Map Icon" className="h-6" />
                            </div>
                            <h3 className="font-semibold">Germany</h3>
                        </div>
                        <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                            <a>View Hotel</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
