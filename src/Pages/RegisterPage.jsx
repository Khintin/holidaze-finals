import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, validateEmail, validatePassword, validateUsername } from "../api/auth";
import { useAuth } from "../utils/AuthProvider";

export default function RegisterPage() {
    const { user, login } = useAuth();
    const navigate = useNavigate();

    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [isVenueManager, setIsVenueManager] = useState(false);

    const handleVenueManagerChange = (event) => {
        setIsVenueManager(event.target.checked);
    };

    const handleRegistration = (event) => {
        event.preventDefault();

        // Reset error messages
        setUsernameError(null);
        setEmailError(null);
        setPasswordError(null);

        // Get and validate credentials
        const username = validateUsername(event.currentTarget.elements.userName.value);
        const email = validateEmail(event.currentTarget.elements.email.value);
        const password = validatePassword(event.currentTarget.elements.password.value);

        if (username.valid && email.valid && password.valid) {
            // Register user is credentials are validated
            register(username.value, email.value, password.value, isVenueManager)
                .then((res) => {
                    login(email.value, password.value)
                        .then(() => {
                            if (!isVenueManager) navigate("/membersuccess");
                            else navigate("/partnersuccess");
                        })
                        .catch((err) => {
                            console.error("Unable to login");
                        });
                })
                .catch((err) => {
                    console.log("ERROR");
                    console.error(err);
                });
        } else {
            // Set error messages
            if (!username.valid) setUsernameError(username.message);
            if (!email.valid) setEmailError(email.message);
            if (!password.valid) setPasswordError(password.message);
        }
    };

    return (
        <>
            <main>
                <section className="blurdbackground bg-cover flex flex-row justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                    <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-blue-100 p-8 bg-opacity-60 md:text-start">
                        <form onSubmit={handleRegistration}>
                            <h1 className="text-3xl font-semibold mb-4">Register</h1>
                            <div className="gap-2 mb-2">
                                <label
                                    htmlFor="userName"
                                    className="form-label text-base font-semibold"
                                >
                                    USERNAME
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    className="w-full max-w-md h-7 p-1"
                                />
                                {usernameError && (
                                    <small className="text-red-600 text-sm">{usernameError}</small>
                                )}
                            </div>
                            <div className="gap-2 mb-2">
                                <label
                                    className="form-label text-base font-semibold"
                                    htmlFor="email"
                                >
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    className="w-full max-w-md h-7 p-1"
                                    type="email"
                                    id="email"
                                />
                                {emailError && (
                                    <small className="text-red-600 text-sm">{emailError}</small>
                                )}
                            </div>

                            <div className="gap-2 mb-2">
                                <label
                                    className="form-label text-base font-semibold"
                                    htmlFor="password"
                                >
                                    PASSWORD
                                </label>
                                <input
                                    className="w-full max-w-md h-7 p-1"
                                    type="password"
                                    id="password"
                                />
                                {passwordError && (
                                    <small className="text-red-600 text-sm">{passwordError}</small>
                                )}
                            </div>
                            <div>
                                <div className="text-base">
                                    <input
                                        type="checkbox"
                                        id="venueManager"
                                        onChange={handleVenueManagerChange}
                                        defaultChecked={isVenueManager}
                                    />
                                    <label htmlFor="venueManager">
                                        Create a Venue Manger Account
                                    </label>
                                </div>
                            </div>

                            <div className="justify-center flex md:justify-start content-center mt-5">
                                <button
                                    id="btn-login"
                                    type="submit"
                                    className="rounded-sm !bg-white py-2 px-6 hover:!bg-blue-600 hover:text-white "
                                >
                                    REGISTER
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-row gap-8 justify-center mt-10">
                            <p className="text-base font-bold">Already have an account?</p>
                            <Link
                                className="text-base font-semibold underline text-blue-600 "
                                to="/login"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
