

export default function Navigation() {
    return  
    <><nav className="texr-xs flex flex-row text-center justify-between bg-white">
    <div>
        <div className="flex flex-row">
            <a href="#">
                <img
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="w-15 h-12 m-2"
            /></a>
        </div>
    </div>

    <div className="text-white-700 mr-5">
        <ul className="flex flex-row items-center justify-center h-full gap-4">
            <li className="text-gray-600 hover:bg-green-500 p-1">
                <a id="login-button" href="#">
                    <span className="p-2">LOG IN</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
</>
}