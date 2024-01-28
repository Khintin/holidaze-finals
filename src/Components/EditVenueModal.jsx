import { useEffect, useRef, useState } from "react";
import { createVenue, editVenue } from "../api/venues";

export default function EditVenueModal({ closeModal, venue, onSave }) {
    const dialogRef = useRef(null);

    const [wifi, setWifi] = useState(venue?.meta?.wifi || false);
    const [parking, setParking] = useState(venue?.meta?.parking || false);
    const [breakfast, setBreakfast] = useState(venue?.meta?.breakfast || false);
    const [pets, setPets] = useState(venue?.meta?.pets || false);

    useEffect(() => {
        dialogRef?.current?.showModal();
    }, []);

    const handleSaveVenue = async (event) => {
        event.preventDefault();

        const media = event.currentTarget.elements.imageUrl.value;

        const venueData = {
            name: event.currentTarget.elements.hotelName.value,
            description: event.currentTarget.elements.description.value,
            price: parseInt(event.currentTarget.elements.price.value),
            maxGuests: parseInt(event.currentTarget.elements.maxGuests.value),
            meta: {
                wifi: wifi,
                parking: parking,
                breakfast: breakfast,
                pets: pets,
            },
            media: media ? [media] : [],
            location: {
                country: event.currentTarget.elements.location.value,
            },
            rating: parseInt(event.currentTarget.elements.rating.value),
        };

        if (venue && venue.id) {
            const res = await editVenue(venue.id, venueData);
            if (!res.errors) {
                onSave();
                handleCloseModal();
            }
        } else {
            const res = await createVenue(venueData);
            if (!res.errors) {
                onSave();
                handleCloseModal();
            }
        }
    };

    const handleCloseModal = () => {
        dialogRef?.current?.close();
        closeModal();
    };

    return (
        <dialog
            ref={dialogRef}
            className="p-4 rounded shadow-2xl flex flex-col gap-4 w-[600px] max-w-[95vw]"
        >
            <form onSubmit={handleSaveVenue}>
                <h3 className="text-2xl font-bold mb-4">{venue ? "Edit" : "Create"} Venue</h3>
                <div className="mb-4">
                    <label
                        htmlFor="hotelName"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Hotel Name:
                    </label>
                    <input
                        defaultValue={venue?.name}
                        required
                        type="text"
                        id="hotelName"
                        name="hotelName"
                        placeholder="Enter hotel name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="imageUrl"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Image URL:
                    </label>
                    <input
                        defaultValue={venue?.media[0] || null}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter image URL"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Location:
                    </label>
                    <input
                        defaultValue={venue?.location?.country || null}
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter hotel location"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Description:
                    </label>
                    <textarea
                        defaultValue={venue?.description || null}
                        id="description"
                        required
                        name="description"
                        rows="4"
                        placeholder="Enter hotel description"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="facilities"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Facilities:
                    </label>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">
                            <input
                                defaultChecked={wifi}
                                onChange={(event) => setWifi(event.target.checked)}
                                type="checkbox"
                                id="wifi"
                                name="wifi"
                            />
                            WiFi
                        </div>
                        <div className="flex flex-row gap-2">
                            <input
                                defaultChecked={parking}
                                onChange={(event) => setParking(event.target.checked)}
                                type="checkbox"
                                id="parking"
                                name="parking"
                            />
                            Parking
                        </div>
                        <div className="flex flex-row gap-2">
                            <input
                                defaultChecked={breakfast}
                                onChange={(event) => setBreakfast(event.target.checked)}
                                type="checkbox"
                                id="breakfast"
                                name="breakfast"
                            />
                            Breakfast
                        </div>
                        <div className="flex flex-row gap-2">
                            <input
                                defaultChecked={pets}
                                onChange={(event) => setPets(event.target.checked)}
                                type="checkbox"
                                id="pets"
                                name="pets"
                            />
                            Pets
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Rating:
                    </label>
                    <input
                        type="number"
                        defaultValue={venue?.rating || 3}
                        min={0}
                        max={5}
                        id="rating"
                        required
                        name="rating"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="maxGuests"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Max guests:
                    </label>
                    <input
                        type="number"
                        defaultValue={venue?.maxGuests || 4}
                        min={0}
                        max={10}
                        required
                        id="maxGuests"
                        name="maxGuests"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-1">
                        Price:
                    </label>
                    <input
                        type="number"
                        defaultValue={venue?.price || 100}
                        min={0}
                        id="price"
                        name="price"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                >
                    Submit
                </button>
                <button
                    onClick={handleCloseModal}
                    type="button"
                    className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                >
                    Cancel
                </button>
            </form>
        </dialog>
    );
}
