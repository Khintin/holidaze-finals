export default function Hero() {
    return <section>
    <div className="flex flex-col gap-8 mt-8 mx-4">
        <div className="justify-center flex content-center">
            <img className="w-58 h-38" src="" alt="" />
        </div>
        <div className="justify-center flex content-center border-green-500">
            <input
                id="search-box"
                className="border-green-600 w-full max-w-md h-10 p-2"
                type="text"
                placeholder="Search"
            />
        </div>

        <div className="justify-center flex content-center">
            <button
                id="btn-search"
                type="button"
                className="rounded-sm !bg-white py-2 px-4 hover:!bg-blue-400"
            >
                SEARCH
            </button>
        </div>
    </div>
</section>
}