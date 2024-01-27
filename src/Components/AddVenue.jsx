export default function AddVenue() {
    return (
        <>
            <main>
                <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Hotel Venue Input Form</h1>

                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="hotelName"
                                className="block text-sm font-medium text-gray-600 mb-1"
                            >
                                Hotel Name:
                            </label>
                            <input
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
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter image URL"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <h2 className="text-sm font-medium text-gray-600 mb-1">
                                Image Preview:
                            </h2>
                            <div
                                id="imagePreview"
                                className="w-full h-32 bg-cover bg-center rounded-md"
                            ></div>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-600 mb-1"
                            >
                                Location:
                            </label>
                            <input
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
                                id="description"
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
                            <input
                                type="text"
                                id="facilities"
                                name="facilities"
                                placeholder="Enter hotel facilities (comma-separated)"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
