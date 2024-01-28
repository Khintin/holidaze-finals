import { useState, useEffect, useRef } from "react";
import { getMyVenues } from "../api/profile";
import PropertyEntry from "./PropertyEntry";
import Infobox from "./Shared/Infobox";
import EditVenueModal from "./EditVenueModal";
import ViewBookingsModal from "./ViewBookingsModal";

export default function Properties() {
    const editVenueModal = useRef(null);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [venues, setVenues] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState(null);

    const [venueToEdit, setVenueToEdit] = useState(null);
    const [refreshVenues, setRefreshVenues] = useState(true);

    useEffect(() => {
        const fetchVenues = async () => {
            const _venues = await getMyVenues();
            setVenues(_venues);
        };

        fetchVenues()
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [refreshVenues]);

    const handleEditVenue = (venueData) => {
        setSelectedVenue(venueData);
        setIsModalOpen(true);
    };

    const handleVenueSaved = (event) => {
        setRefreshVenues(!refreshVenues);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsBookingsModalOpen(false);
        setSelectedVenue(null);
    };

    const handleViewBookings = (venue) => {
        setSelectedVenue(venue);
        setIsBookingsModalOpen(true);
    };

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
                    {venues.length == 0 && (
                        <div className="w-full my-4 md:my-12 mx-auto">
                            <Infobox
                                type="info"
                                title="No venues"
                                text="You don't own any venues. Create your first venue to manage it here."
                            />
                        </div>
                    )}
                    {venues.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-4 my-10">
                            {venues.map((venue) => {
                                return (
                                    <PropertyEntry
                                        key={venue.id}
                                        venue={venue}
                                        onDeleted={() => setRefreshVenues(!refreshVenues)}
                                        onEdit={(venue) => handleEditVenue(venue)}
                                        onViewBookings={(venue) => handleViewBookings(venue)}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="flex flex-row justify-center md:justify-start max-w-7xl mx-auto ">
                    <button
                        onClick={() => handleEditVenue(null)}
                        className="rounded-sm text-white !bg-blue-600 py-2 px-6 hover:!bg-blue-200 hover:text-black  "
                    >
                        Create Venue
                    </button>
                </div>

                {isModalOpen && (
                    <EditVenueModal
                        closeModal={handleCloseModal}
                        venue={selectedVenue}
                        onSave={handleVenueSaved}
                    />
                )}

                {isBookingsModalOpen && (
                    <ViewBookingsModal closeModal={handleCloseModal} venue={selectedVenue} />
                )}
            </section>
        </>
    );
}
