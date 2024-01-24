import { Link } from "react-router-dom";
import SampleImage from "../assets/sampleimage.jpg";
import Datepicker from "../Components/Dates/Datepicker";
import HotelBookingForm from "../Components/Hotelbookingform";

export default function HotelDescriptionPage() {
    const handleStartDateSelected = (event) => {
        // console.log(date);
        console.log("Start date is: " + event.target.value);
    };

    return (
        <>
            <main className="bg-blue-100">
                <section className=" flex flex-col md:flex-row   max-w-7xl px-4 mx-auto gap-20 py-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-10  gap-4 p-4 my-10">
                        <div className="p-8 bg-blue-200  rounded w-96 ">
                            <img
                                src={SampleImage}
                                alt="Sea Side"
                                className="w-full border-gray-200 border object-cover h-96"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl mb-6">Hotel Italy</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                sunt repudiandae molestiae maxime architecto aut id delectus
                                exercitationem sed, iure neque, necessitatibus molestias aliquam
                                eius assumenda saepe quo accusamus magnam?
                            </p>
                            <div className="mt-5 gap-5 flex flex-row">
                                <div className=" flex flex-col ">
                                    <label className="text-base font-semibold">
                                        Check-in Date
                                        <Datepicker selectedDate={handleStartDateSelected} />
                                    </label>
                                </div>
                                <div>
                                    <label className="text-base font-semibold">
                                        Check-out Date
                                        <Datepicker />
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-start mt-5">
                                <label className="text-base font-semibold">
                                    {" "}
                                    Guests
                                    <HotelBookingForm />
                                </label>
                            </div>
                            <div className="mt-20">
                                <button className="font-medium items-center border-double border-blue-200 bg-blue-500 text-white hover:bg-blue-200 hover:text-black px-4 py-2 ">
                                    <Link to="#">Book Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
