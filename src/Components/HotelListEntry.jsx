import StarIcons from "../assets/icons8-star-64.png";
import MapIcon from "../assets/icons8-map-48.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HotelListEntry({ venue }) {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const _stars = [];

        for (let i = 0; i < venue.rating; i++) {
            _stars.push(i);
        }

        setStars(_stars);
    }, []);

    return (
        <div className="p-8 bg-blue-200  rounded">
            {venue.media && venue.media.length > 0 ? (
                <img
                    src={venue.media[0]}
                    alt="Sea Side"
                    className="w-full border-gray-200 border object-cover h-48"
                />
            ) : (
                <div className="w-full border-gray-200 bg-gray-200 border h-48"></div>
            )}

            <div />
            <div className="flex flex-row mt-2 justify-between">
                <h2 className=" sm:text-xl lg:text-base font-bold my-2">{venue.name}</h2>
                <div className="flex flex-row mt-2">
                    {stars.map((idx) => {
                        return <img key={idx} src={StarIcons} alt="icon star" className="h-5" />;
                    })}
                </div>
            </div>
            <div className="flex flex-row mt-2 gap-2 ">
                <div>
                    <img src={MapIcon} alt="Map Icon" className="h-6" />
                </div>
                <h3 className="font-semibold">{venue.location.country || "Unknown"}</h3>
            </div>
            <div className="mt-2 text-lg text-blue-600 font-semibold underline ">
                <Link to={venue.id}>View Hotel </Link>
            </div>
        </div>
    );
}
