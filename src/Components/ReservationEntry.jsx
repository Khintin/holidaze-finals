import StarIcons from "../assets/icons8-star-64.png";
import MapIcon from "../assets/icons8-map-48.png";
import { useState } from "react";
import ConfirmationDialog from "./Shared/ConfirmationDialog";
import { deleteBookingById } from "../api/bookings";

export default function ReservationEntry({ reservation }) {
    const venue = reservation.venue;
    const _stars = [];

    for (let i = 0; i < venue.rating; i++) {
        _stars.push(i);
    }

    const [stars, setStars] = useState(_stars);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
        }).format(new Date(date));
    };

    const handleDeleteBooking = async (confirmed) => {
        if (confirmed) {
            const res = await deleteBookingById(reservation.id);
            if (res) setDeleted(true);
        }

        setShowDeleteDialog(false);
    };

    if (deleted) return null;
    else
        return (
            <div className="p-4 bg-blue-200  rounded">
                <img
                    src={venue.media[0]}
                    alt="Sea Side"
                    className="w-full border-gray-200 border object-cover h-48"
                />
                <div />
                <div className="flex flex-col mt-2 ">
                    <h2 className=" sm:text-xl lg:text-base font-bold my-2">{venue.name}</h2>
                    <div className="flex flex-row mt-2">
                        {stars.map((idx) => {
                            return (
                                <img key={idx} src={StarIcons} alt="icon star" className="h-5" />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-row mt-2 gap-2 ">
                    <div>
                        <img src={MapIcon} alt="Map Icon" className="h-6" />
                    </div>
                    <h3 className="font-semibold">{venue.location.country}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        <strong>Check in:</strong> {formatDate(reservation.dateFrom)}
                    </p>
                    <p>
                        <strong>Check out:</strong> {formatDate(reservation.dateTo)}
                    </p>
                </div>
                <div className="justify-center flex md:justify-start content-center mt-5">
                    <button
                        onClick={() => setShowDeleteDialog(true)}
                        id="btn-login"
                        type="submit"
                        className="rounded-sm text-sm !bg-white py-1 px-4 hover:!bg-blue-600 hover:text-white "
                    >
                        Cancel Reservation
                    </button>
                </div>
                {showDeleteDialog && (
                    <ConfirmationDialog
                        onClose={handleDeleteBooking}
                        title="Delete booking?"
                        text="Are you sure you want to delete this booking? This cannot be undone."
                    />
                )}
            </div>
        );
}
