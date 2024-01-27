import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <section className="heroimage bg-cover flex flex-row justify-center md:justify-end max-w-7xl mx-auto py-24 md:py-32 lg:py-48">
                <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-white p-8 bg-opacity-60">
                    <h1 className="text-4xl font-bold mb-6">BOOK PERFECT STAY FOR YOUR VACATION</h1>
                    <div className="">
                        <button className="font-medium items-center border-double border-blue-200 bg-blue-500 text-white hover:bg-blue-200 hover:text-black px-4 py-2 ">
                            <Link to="/hotels">Book Your Stay</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
