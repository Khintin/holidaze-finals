import { Link } from "react-router-dom";
import PartnerImage from "..//assets/partnerimage.png";

export default function PartnerSuccessPage() {
    return (
        <>
            <main className="">
                <section className="bg-cover flex flex-col justify-center items-center max-w-7xl mx-auto py-24 md:py-32 lg:py-48  ">
                    <h1 className="text-5xl text-blue-600 font-bold">Congratulations!</h1>
                    <h2 className="text-2xl font-semibold my-4">
                        You are now, Officially Holidaze Partner
                    </h2>
                    <div>
                        <img src={PartnerImage} alt="hotel picture" className="h-96 " />
                    </div>
                    <div className="justify-center flex md:justify-start content-center mt-5">
                        <Link to="/partnerprofile">
                            {" "}
                            <button
                                id="btn-login"
                                type="button"
                                className="rounded-sm  border-double !bg-blue-200 py-2 px-6 hover:!bg-blue-600 hover:text-white "
                            >
                                Welcome to your account
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
