export default function Searchbar({ onQueryChanged }) {
    const handleSearchQueryChanged = (event) => {
        onQueryChanged(event.target.value);
    };

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
                            onKeyUp={handleSearchQueryChanged}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
