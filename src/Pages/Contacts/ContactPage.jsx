import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import Infobox from "../../Components/Shared/Infobox";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        let valid = true;
        const errors = { fullName: "", subject: "", email: "", body: "" };

        // Full Name validation
        if (formData.fullName.trim().length < 3) {
            valid = false;
            errors.fullName = "Full Name must be at least 3 characters";
        }

        // Subject validation
        if (formData.subject.trim().length < 3) {
            valid = false;
            errors.subject = "Subject must be at least 3 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            valid = false;
            errors.email = "Enter a valid email address";
        }

        // Body validation
        if (formData.body.trim().length < 3) {
            valid = false;
            errors.body = "Body must be at least 3 characters";
        }

        setFormErrors(errors);
        return valid;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted:", formData);
            setSuccess(true);
        } else {
            console.log("Form validation failed");
        }
    };

    if (success) {
        return (
            <section className="max-w-4xl w-full mx-auto px-4">
                <ContactInfo />
                <Infobox
                    title="Message sent!"
                    text="We've received your message. We will get back to you as soon as possible."
                    type="success"
                />
            </section>
        );
    }

    return (
        <>
            <section className="blurdbackground bg-cover flex flex-col justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                <ContactInfo />
                <div className="my-8 p-4 bg-slate-300 rounded-md mx-10">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col flex-wrap md:flex-row w-full"
                    >
                        <div className="basis-full md:basis-1/2 md:pr-2 mb-4">
                            <label
                                htmlFor="fullName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.fullName && "border-red-500"
                                }`}
                            />
                            {formErrors.fullName && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.fullName}
                                </span>
                            )}
                        </div>

                        <div className="basis-full md:basis-1/2 md:pl-2 mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.subject && "border-red-500"
                                }`}
                            />
                            {formErrors.subject && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.subject}
                                </span>
                            )}
                        </div>

                        <div className="basis-full col-span-2 mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.email && "border-red-500"
                                }`}
                            />
                            {formErrors.email && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.email}
                                </span>
                            )}
                        </div>

                        <div className="basis-full col-span-2 mb-4">
                            <label
                                htmlFor="body"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Body
                            </label>
                            <textarea
                                id="body"
                                name="body"
                                value={formData.body}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.body && "border-red-500"
                                }`}
                            ></textarea>
                            {formErrors.body && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.body}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="font-medium items-center border-double border-blue-200 bg-blue-500 text-white hover:bg-blue-200 hover:text-black px-4 py-2 "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
