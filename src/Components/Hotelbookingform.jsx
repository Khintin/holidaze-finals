import React, { useState } from "react";

const HotelBookingForm = ({ onGuestsChanged, adults, children }) => {
    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);

    const handleAdultsChange = (event) => {
        const _adults = parseInt(event.target.value, 10);
        setNumAdults(_adults);
        onGuestsChanged(_adults + numChildren);
    };

    const handleChildrenChange = (event) => {
        const _children = parseInt(event.target.value, 10);
        setNumChildren(_children);
        onGuestsChanged(numAdults + _children);
    };

    return (
        <div className="flex gap-3">
            <label>Adults:</label>
            <select value={numAdults} onChange={handleAdultsChange}>
                {[...Array(10).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>

            <label>Children:</label>
            <select value={numChildren} onChange={handleChildrenChange}>
                {[...Array(5).keys()].map((index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default HotelBookingForm;
