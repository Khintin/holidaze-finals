import { Link } from "react-router-dom";
import SampleImage from "../assets/sampleimage.jpg";
import Datepicker from "../Components/Dates/Datepicker";

export default function HotelDescriptionPage() {
    const handleStartDateSelected = (event) => {
        // console.log(date);
        console.log("Start date is: " + event.target.value);
    };

    return (
        <>
            <main className="bg-blue-100">
                <section className=" flex flex-col md:flex-row max-w-7xl px-4 mx-auto gap-20 py-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 p-4 my-10">
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
                            <Datepicker selectedDate={handleStartDateSelected} />
                            <Datepicker />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
