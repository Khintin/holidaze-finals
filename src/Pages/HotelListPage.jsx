import { useEffect, useState } from "react";
import ListImage from "../assets/Holidaze-01.png";
import HotelList from "../Components/HotelList";
import Searchbar from "../Components/Searchbar";
import { getVenues } from "../api/venues";

export default function HotelListPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [venues, setVenues] = useState([]);
    const [filteredVenues, setFilteredVenues] = useState([]);

    useEffect(() => {
        const fetchVenues = async () => {
            const _venues = await getVenues();
            setVenues(_venues);
            setFilteredVenues(_venues);
        };

        fetchVenues()
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSearch = (query) => {
        if (!query || query.length < 1) setFilteredVenues(venues);

        const _filteredVenues = venues.filter(
            (venue) => venue.name.toLowerCase().indexOf(query) > -1
        );
        setFilteredVenues(_filteredVenues);
    };

    return (
        <>
            <section className="max-w-7xl mx-auto w-full">
                <div className="mb-4">
                    <img src={ListImage} alt="" className="mx-auto w-full object-cover" />
                </div>

                <div className="flex flex-col lg:flex-row items-center">
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                    <h2 className="basis-1/3 flex-shrink-0 min-w-[250px] text-center text-xl font-bold">
                        HOTELS
                    </h2>
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                </div>

                <div className="mb-4">
                    <Searchbar onQueryChanged={handleSearch} />
                </div>

                {loading ? (
                    <h1>Please wait...</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) : filteredVenues.length == 0 ? (
                    <h1>No hotels match your search</h1>
                ) : (
                    <HotelList venues={filteredVenues} />
                )}
            </section>
        </>
    );
}
