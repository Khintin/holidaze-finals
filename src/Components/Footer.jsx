import Logo from "../assets/logo.png";
import FacebookIcon from "../assets/icons8-facebook-48.png";
import InstaIcon from "../assets/icons8-insta-40.png";
import TwitterIcon from "../assets/icons8-twitter-circled-48.png";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col bg-blue-200 justify-center py-10 ">
                <div className="flex flex-col items-center">
                    <img src={Logo} alt="Logo" className="w-28" />
                    <div className="flex flex-row justify-center gap-5">
                        <img src={FacebookIcon} alt="Instafram Icon" className="h-10" />
                        <img src={InstaIcon} alt="Instafram Icon" className="h-10" />
                        <img src={TwitterIcon} alt="Twitter Icon" className="h-10" />
                    </div>
                </div>

                <span className="text-center">Copyright 2024 Cristina Syversen Inc.</span>
            </footer>
        </>
    );
}
