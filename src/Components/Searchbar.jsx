export default function Searchbar() {
    return (
        <>
            <div className="p-4">
                <form action="/search" method="get">
                    <label htmlFor="search" className="block mb-2 text-sm text-gray-600"></label>
                    <div className="flex mt-10">
                        <input
                            type="text"
                            id="search"
                            name="q"
                            placeholder="Enter your search term"
                            className="p-2 border rounded-l w-full  border-black shadow-inner"
                        />
                        <button
                            type="submit"
                            className="text-base font-semibold bg-blue-500 hover:bg-blue-400 hover:text-black text-white p-2 rounded-r px-20"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
