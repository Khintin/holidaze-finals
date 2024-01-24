import HomeAddressIcon from "../../assets/icons8-home-64.png";
import CallIcon from "../../assets/icons8-call-64.png";
import ChatIcon from "../../assets/icons8-chat-48.png";

export default function ContactInfo() {
    return (
        <>
            <section>
                <h1 className="text-2xl text-blue-600 font-bold text-center">HOLIDAZE</h1>
                <div className="flex flex-col justify-center max-w-lg mx-auto">
                    <div className="flex flex-row justify-center gap-3">
                        <img src={HomeAddressIcon} alt="address pin" className="w-5" />
                        <p className="text-base font-semibold">Addres: 123 Street, Oslo, Norway</p>
                    </div>
                    <div className="flex flex-row  justify-center gap-3">
                        <img src={CallIcon} alt="phone" className="w-5" />
                        <p className="text-base font-semibold">Phone: +47 12345678</p>
                    </div>
                    <div className="flex flex-row justify-center gap-3">
                        <img src={ChatIcon} alt="chat icon" className="w-7" />
                        <p className="text-base font-semibold">Chat Us 24/7</p>
                    </div>
                </div>
            </section>
        </>
    );
}
