import React, { useState } from 'react';

const HotelBookingForm = () => {
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);

    const handleAdultsChange = (event) => {
        setNumAdults(parseInt(event.target.value, 10));
    };

    const handleChildrenChange = (event) => {
        setNumChildren(parseInt(event.target.value, 10));
    };

    return (
        <div>
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
