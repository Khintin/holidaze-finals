import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Datepicker from "../Components/Dates/Datepicker";
import HotelBookingForm from "../Components/Hotelbookingform";
import { getVenueById } from "../api/venues.js";
import Infobox from "../Components/Shared/Infobox.jsx";
import RestaurantIcon from "./../assets/icons8-cutlery-50.png";
import WifiIcon from "../assets/icons8-wifi-48.png";
import ParkingIcon from "../assets/icons8-parking-64.png";
import { createBooking } from "../api/bookings.js";

export default function HotelDescriptionPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [venue, setVenue] = useState(null);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [adultGuests, setAdultGuests] = useState(1);
    const [childGuests, setChildGuests] = useState(0);
    const [guestCount, setGuestCount] = useState(1);

    const { venueId } = useParams();

    useEffect(() => {
        const fetchVenue = async () => {
            const _venue = await getVenueById(venueId);
            setVenue(_venue);
        };

        fetchVenue()
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleGuestCountChanged = (totalGuests) => {
        setGuestCount(totalGuests);
    };

    const handleDatesChanged = (event) => {
        setStartDate(event.start);
        setEndDate(event.end);
    };

    const handleBooking = async () => {
        const res = await createBooking(startDate, endDate, guestCount, venueId);
        console.log(res);
    };

    const disableBooking = () => {
        return !startDate ||
            !endDate ||
            !guestCount ||
            guestCount < 1 ||
            guestCount > venue.maxGuests
            ? true
            : false;
    };

    if (loading) {
        return (
            <div className="max-w-7xl px-4 mx-auto my-12 md:my-24">
                <Infobox title="Loading" text="Please wait..." type="info" />;
            </div>
        );
    } else if (error) {
        return (
            <div className="max-w-7xl px-4 mx-auto my-12 md:my-24">
                <Infobox title="Loading" text="Please wait..." type="error" />;
            </div>
        );
    } else
        return (
            <>
                <main className="bg-blue-100">
                    <section className="max-w-7xl px-4 mx-auto gap-20 py-4 md:py-24">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0 p-4 bg-blue-200 rounded">
                                {venue.media && venue.media.length > 0 ? (
                                    <img
                                        src={venue.media[0]}
                                        alt={venue.name}
                                        className="w-full border-gray-200 border object-cover h-96"
                                    />
                                ) : (
                                    <div className="w-full border-gray-200 bg-gray-200 border h-96"></div>
                                )}
                            </div>
                            <div className="basis-full md:basis-1/2 lg:basis-2/3">
                                <h1 className="text-4xl mb-6">{venue.name}</h1>
                                <div className="flex flex-row gap-2">
                                    <h3 className="text-base font-semibold">Description:</h3>
                                    <p>{venue.description}</p>
                                </div>
                                <div className="flex flex-row gap-3 mt-2">
                                    {venue.meta?.wifi && <img src={WifiIcon} className="h-6" />}
                                    {venue.meta?.breakfast && (
                                        <img src={RestaurantIcon} className="h-6" />
                                    )}
                                    {venue.meta?.parking && (
                                        <img src={ParkingIcon} className="h-6" />
                                    )}
                                </div>
                                <Datepicker onChange={handleDatesChanged} />
                                <div className="flex flex-col justify-start mt-5">
                                    <label className="text-base font-semibold">Guests</label>
                                    <HotelBookingForm
                                        onGuestsChanged={handleGuestCountChanged}
                                        adults={adultGuests}
                                        children={childGuests}
                                    />
                                </div>
                                <div className="mt-10 text-base font-semibold">
                                    <h2>Price: ${venue.price}/night</h2>
                                </div>
                                <div className="mt-20">
                                    <button
                                        onClick={handleBooking}
                                        disabled={disableBooking()}
                                        className="font-medium items-center  bg-blue-500 text-white hover:bg-blue-200 hover:text-black px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
}
