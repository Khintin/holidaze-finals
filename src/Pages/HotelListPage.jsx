import ListImage from "../assets/Holidaze-01.png";
import HotelTwelve from "../Components/HotelTwelve";

export default function HotelListPage() {
    return (
        <>
            <section className="max-w-7xl mx-auto w-full">
                <div className="">
                    <img src={ListImage} alt="" className="mx-auto w-full object-cover" />
                </div>

                <div>
                    <HotelTwelve />
                </div>
            </section>
        </>
    );
}
