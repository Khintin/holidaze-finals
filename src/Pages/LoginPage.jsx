import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <main className="">
                <section className="blurdbackground bg-cover flex flex-row justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                    <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-blue-100 p-8 bg-opacity-60 md:text-start">
                        <form action="/profile.html">
                            <h1 className="text-3xl font-semibold mb-4">Log In</h1>
                            <div className="gap-2 mb-2">
                                <label
                                    className="form-label text-base font-semibold"
                                    htmlFor="form1Example13"
                                >
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    className="w-full max-w-md h-7 p-1"
                                    type="email"
                                    id="username"
                                    minLength="8"
                                />
                            </div>

                            <div className="gap-2 mb-2">
                                <label
                                    className="form-label text-base font-semibold"
                                    htmlFor="form1Example23"
                                >
                                    PASSWORD
                                </label>
                                <input
                                    className="w-full max-w-md h-7 p-1"
                                    type="password"
                                    id="password"
                                    minLength="8"
                                />
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
                                    type="button"
                                    className="rounded-sm  !bg-white py-2 px-6 hover:!bg-blue-600 hover:text-white "
                                >
                                    <Link to="/profile">LOG IN</Link>
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-row gap-8 justify-center  mt-10">
                            <p className="text-base font-bold">Don't have an account?</p>
                            <Link
                                className="text-base font-semibold underline text-blue-600 "
                                to="/registermember"
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
