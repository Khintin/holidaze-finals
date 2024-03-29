import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import { useState } from "react";
import { validateEmail, validatePassword } from "../api/auth";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();

        // Reset error messages
        setEmailError(null);
        setPasswordError(null);

        // Get and validate credentials
        const email = validateEmail(event.currentTarget.elements.email.value);
        const password = validatePassword(event.currentTarget.elements.password.value);

        if (email.valid && password.valid) {
            // Register user is credentials are validated
            login(email.value, password.value).then((res) => {
                if (res && res.accessToken) navigate("/profile");
            });
        } else {
            // Set error messages
            if (!email.valid) setEmailError(email.message);
            if (!password.valid) setPasswordError(password.message);
        }
    };

    return (
        <>
            <main className="">
                <section className="blurdbackground bg-cover flex flex-row justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                    <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-blue-100 p-8 bg-opacity-60 md:text-start">
                        <form onSubmit={handleLogin}>
                            <h1 className="text-3xl font-semibold mb-4">Log In</h1>
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
                                        value=""
                                        id="form1Example3"
                                        checked={false}
                                        onChange={() => null}
                                    />
                                    <label htmlFor="form1Example3"> Remember me </label>
                                </div>
                                <a className="hover:text-blue-600 text-base font-md" href="#!">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="justify-center flex md:justify-start content-center mt-5">
                                <button
                                    id="btn-login"
                                    type="submit"
                                    className="rounded-sm  !bg-white py-2 px-6 hover:!bg-blue-600 hover:text-white "
                                >
                                    LOG IN
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-row gap-8 justify-center  mt-10">
                            <p className="text-base font-bold">Don't have an account?</p>
                            <Link
                                className="text-base font-semibold underline text-blue-600 "
                                to="/register"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
