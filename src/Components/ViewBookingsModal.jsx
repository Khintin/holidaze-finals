import { useRef, useState, useEffect } from "react";
import Infobox from "./Shared/Infobox";

export default function ViewBookingsModal({ closeModal, venue }) {
    const dialogRef = useRef(null);

    const [bookings, setBookings] = useState(venue?.bookings || []);

    useEffect(() => {
        dialogRef?.current?.showModal();
    }, []);

    const handleCloseModal = () => {
        dialogRef?.current?.close();
        closeModal();
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
        }).format(new Date(date));
    };

    return (
        <dialog
            ref={dialogRef}
            className="p-4 rounded shadow-2xl flex flex-col gap-4 w-[600px] max-w-[95vw]"
        >
            {!bookings ||
                (bookings.length == 0 && (
                    <Infobox
                        title="No bookings"
                        text="There are no bookings for this venue at the moment"
                    />
                ))}
            {bookings?.length > 0 && (
                <div className="flex flex-col gap-4">
                    {bookings.map((booking) => {
                        return (
                            <div
                                key={booking.id}
                                className="border border-gray-300 rounded p-4 flex flex-col"
                            >
                                <p>Check-in: {formatDate(booking.dateFrom)}</p>
                                <p>Check-out: {formatDate(booking.dateTo)}</p>
                                <p>Guests: {booking.guests}</p>
                            </div>
                        );
                    })}
                </div>
            )}
            <button
                onClick={handleCloseModal}
                type="button"
                className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
            >
                Close
            </button>
        </dialog>
    );
}
