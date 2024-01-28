import { deleteVenue } from "../api/venues";

export default function PropertyEntry({ venue, onDeleted, onEdit, onViewBookings }) {
    const handleDeleteVenue = async () => {
        const res = await deleteVenue(venue.id);
        onDeleted();
    };

    const handleEditVenue = () => {
        onEdit(venue);
    };

    const handleViewBookings = () => {
        onViewBookings(venue);
    };

    return (
        <div className="p-8 bg-blue-200  rounded">
            <img
                src={venue.media[0]}
                alt={venue.name}
                className="w-full border-gray-200 border object-cover h-48"
            />
            <div />
            <div className="flex flex-row mt-2 justify-between">
                <h2 className=" sm:text-xl lg:text-base font-bold my-2">{venue.name}</h2>
            </div>
            <div className="mt-2 text-lg text-blue-600 font-semibold underline  flex flex-col">
                <button onClick={handleEditVenue}>Edit venue</button>
                <button onClick={handleDeleteVenue}>Delete venue</button>
                <button onClick={handleViewBookings}>View bookings</button>
            </div>
        </div>
    );
}
