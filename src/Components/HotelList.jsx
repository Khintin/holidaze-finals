import HotelListEntry from "./HotelListEntry";

export default function HotelList({ venues }) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-10">
                {venues.map((venue) => {
                    return <HotelListEntry key={venue.id} venue={venue} />;
                })}
            </div>
        </>
    );
}
