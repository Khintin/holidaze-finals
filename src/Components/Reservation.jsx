import { useEffect, useState } from "react";
import { getMyBookings } from "../api/profile";
import ReservationEntry from "./ReservationEntry";
import Infobox from "./Shared/Infobox";

export default function Reservation() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const _bookings = await getMyBookings();
            setBookings(_bookings);
        };

        fetchBookings()
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <section className="my-10 ">
                <div className="flex flex-col lg:flex-row items-center">
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                    <h2 className="basis-1/3 flex-shrink-0 min-w-[250px] text-center text-xl font-bold">
                        MY RESERVATION
                    </h2>
                    <hr className="w-full lg:basis-1/3 flex-shrink border-black" />
                </div>

                <div className="bg-blue-100 max-w-7xl mx-auto flex flex-row my-10 items-center w-full">
                    {bookings.length == 0 && (
                        <div className="w-full my-4 md:my-12 mx-auto">
                            <Infobox
                                type="info"
                                title="No bookings"
                                text="You don't have any reservations. Come back when you've booked a venue."
                            />
                        </div>
                    )}
                    {bookings.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-4 my-10">
                            {bookings.map((booking) => {
                                return <ReservationEntry key={booking.id} reservation={booking} />;
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
